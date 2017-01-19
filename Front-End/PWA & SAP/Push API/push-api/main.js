var isPushEnabled = false;
var useNotifications = false;

var subBtn = document.querySelector('.subscribe');
var sendBtn;
var sendInput;

var controlsBlock = document.querySelector('.controls');
var subscribersList = document.querySelector('.subscribers ul');
var messagesList = document.querySelector('.messages ul');

var nameForm = document.querySelector('#form');
var nameInput = document.querySelector('#name-input');
nameForm.onsubmit = function(e) {
  e.preventDefault()
};
nameInput.value = 'Bob';

Notification.requestPermission();

window.addEventListener('load', function() {   
  subBtn.addEventListener('click', function() {  
    if (isPushEnabled) {  
      unsubscribe();  
    } else {  
      subscribe();  
    }  
  });

  // Check that service workers are supported, if so, progressively  
  // enhance and add push messaging support, otherwise continue without it.  
  if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('sw.js').then(function(reg) {
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }

      initialiseState(reg);
    });  
  } else {  
    console.log('Service workers aren\'t supported in this browser.');  
  }  
});


// Once the service worker is registered set the initial state  
function initialiseState(reg) {  
  // Are Notifications supported in the service worker?  
  if (!(reg.showNotification)) {  
    console.log('Notifications aren\'t supported on service workers.');  
    useNotifications = false;  
  } else {
    useNotifications = true; 
  }

  // Check the current Notification permission.  
  // If its denied, it's a permanent block until the  
  // user changes the permission  
  if (Notification.permission === 'denied') {  
    console.log('The user has blocked notifications.');  
    return;  
  }

  // Check if push messaging is supported  
  if (!('PushManager' in window)) {  
    console.log('Push messaging isn\'t supported.');  
    return;  
  }

  // We need the service worker registration to check for a subscription  
  navigator.serviceWorker.ready.then(function(reg) {  
    // Do we already have a push message subscription?  
    reg.pushManager.getSubscription()  
      .then(function(subscription) {  
        // Enable any UI which subscribes / unsubscribes from  
        // push messages.  
 
        subBtn.disabled = false;

        if (!subscription) {  
          console.log('Not yet subscribed to Push')
          // We aren't subscribed to push, so set UI  
          // to allow the user to enable push  
          return;  
        }

        // Set your UI to show they have subscribed for  
        // push messages  
        subBtn.textContent = 'Unsubscribe from Push Messaging';  
        isPushEnabled = true;  
        
        // initialize status, which includes setting UI elements for subscribed status
        // and updating Subscribers list via push
        console.log(subscription.toJSON());
        var endpoint = subscription.endpoint;
        var key = subscription.getKey('p256dh');
        console.log(key);
        updateStatus(endpoint,key,'init');
      })  
      .catch(function(err) {  
        console.log('Error during getSubscription()', err);  
      }); 

      // set up a message channel to communicate with the SW
      var channel = new MessageChannel();
      channel.port1.onmessage = function(e) {
        console.log(e);
        handleChannelMessage(e.data);
      }
      
      mySW = reg.active;
      mySW.postMessage('hello', [channel.port2]);
  });  
}



function subscribe() {
  // duplicateNameCheck(nameInput.value).then(function(dupeValue) {
  //   console.log('Dupe value: ' + dupeValue);

  //   if(dupeValue) {
  //     alert('That username is already in use. Please choose another.');
  //   } else {

      // Disable the button so it can't be changed while
      // we process the permission request

      subBtn.disabled = true;

      navigator.serviceWorker.ready.then(function(reg) {
        reg.pushManager.subscribe({userVisibleOnly: true})
          .then(function(subscription) {
            // The subscription was successful
            isPushEnabled = true;
            subBtn.textContent = 'Unsubscribe from Push Messaging';
            subBtn.disabled = false;
            
            // Update status to subscribe current user on server, and to let
            // other users know this user has subscribed
            var endpoint = subscription.endpoint;
            var key = subscription.getKey('p256dh');
            updateStatus(endpoint,key,'subscribe');
          })
          .catch(function(e) {
            if (Notification.permission === 'denied') {
              // The user denied the notification permission which
              // means we failed to subscribe and the user will need
              // to manually change the notification permission to
              // subscribe to push messages
              console.log('Permission for Notifications was denied');
              
            } else {
              // A problem occurred with the subscription, this can
              // often be down to an issue or lack of the gcm_sender_id
              // and / or gcm_user_visible_only
              console.log('Unable to subscribe to push.', e);
              subBtn.disabled = false;
              subBtn.textContent = 'Subscribe to Push Messaging';
            }
          });
      });
  //   }
  // });  
}

function unsubscribe() {
  subBtn.disabled = true;

  navigator.serviceWorker.ready.then(function(reg) {
    // To unsubscribe from push messaging, you need get the
    // subcription object, which you can call unsubscribe() on.
    reg.pushManager.getSubscription().then(
      function(subscription) {

        // Update status to unsubscribe current user from server (remove details)
        // and let other subscribers know they have unsubscribed  
        var endpoint = subscription.endpoint;
        var key = subscription.getKey('p256dh');
        updateStatus(endpoint,key,'unsubscribe');

        // Check we have a subscription to unsubscribe
        if (!subscription) {
          // No subscription object, so set the state
          // to allow the user to subscribe to push
          isPushEnabled = false;
          subBtn.disabled = false;
          subBtn.textContent = 'Subscribe to Push Messaging';
          return;
        }
        
        isPushEnabled = false;

        // setTimeout used to stop unsubscribe being called before the message
        // has been sent to everyone to tell them that the unsubscription has
        // occurred, including the person unsubscribing. This is a dirty
        // hack, and I'm probably going to hell for writing this.
        setTimeout(function() {
        // We have a subcription, so call unsubscribe on it
        subscription.unsubscribe().then(function(successful) {
          subBtn.disabled = false;
          subBtn.textContent = 'Subscribe to Push Messaging';
          isPushEnabled = false;
        }).catch(function(e) {
          // We failed to unsubscribe, this can lead to
          // an unusual state, so may be best to remove
          // the subscription id from your data store and
          // inform the user that you disabled push

          console.log('Unsubscription error: ', e);
          subBtn.disabled = false;
        })
        },3000);
      }).catch(function(e) {
        console.log('Error thrown while unsubscribing from ' +
          'push messaging.', e);
      });
  });
}

function postSubscribeObj(statusType, name, endpoint, key) {
    // Create a new XHR and send an array to the server containing
    // the type of the request, the name of the user subscribing, 
    // and the push subscription endpoint + key the server needs
    // to send push messages
    var request = new XMLHttpRequest();

    request.open('POST', 'https://127.0.0.1:7000');
    request.setRequestHeader('Content-Type', 'application/json');
    
    var subscribeObj = {
                         statusType: statusType,
                         name: nameInput.value,
                         endpoint: endpoint,
                         key: btoa(String.fromCharCode.apply(null, new Uint8Array(key)))
                       }
    console.log(subscribeObj);
    request.send(JSON.stringify(subscribeObj));
}

function updateStatus(endpoint,key,statusType) {
    console.log("updateStatus, endpoint: " + endpoint);
    console.log("updateStatus, key: " + key);
    
  // If we are subscribing to push
  if(statusType === 'subscribe' || statusType === 'init') {
    // Create the input and button to allow sending messages
    sendBtn = document.createElement('button');
    sendInput = document.createElement('input');

    sendBtn.textContent = 'Send Chat Message';
    sendInput.setAttribute('type','text');
    // Append them to the document
    controlsBlock.appendChild(sendBtn);
    controlsBlock.appendChild(sendInput);

    // Set up a listener so that when the Send Chat Message button is clicked,
    // the sendChatMessage() function is fun, which handles sending the message 
    sendBtn.onclick = function() {
      sendChatMessage(sendInput.value);
    }

    postSubscribeObj(statusType, name, endpoint, key);

  } else if(statusType === 'unsubscribe') {
    // If we are unsubscribing from push

    // Remove the UI elements we added when we subscribed
    controlsBlock.removeChild(sendBtn);
    controlsBlock.removeChild(sendInput);
    
    postSubscribeObj(statusType, name, endpoint, key);

  }

}

function handleChannelMessage(data) {
  if(data.action === 'subscribe' || data.action === 'init') {
    var listItem = document.createElement('li');
    listItem.textContent = data.name;
    subscribersList.appendChild(listItem);
  } else if(data.action === 'unsubscribe') {
    for(i = 0; i < subscribersList.children.length; i++) {
      if(subscribersList.children[i].textContent === data.name) {
        subscribersList.children[i].parentNode.removeChild(subscribersList.children[i]);
      }
    }
    nameInput.disabled = false;
  } else if(data.action === 'chatMsg') {
    var listItem = document.createElement('li');
    listItem.textContent = data.name + ": " + data.msg;
    messagesList.appendChild(listItem);
    sendInput.value = '';
  }
}

function sendChatMessage(chatMsg) {
  navigator.serviceWorker.ready.then(function(reg) {  
    // Find push message subscription, then retrieve it
    reg.pushManager.getSubscription().then(function(subscription) {
      var endpoint = subscription.endpoint;
      var key = subscription.getKey('p256dh');
      // Create a new XHR and send an object to the server containing
      // the type of the request, the name of the user unsubscribing, 
      // and the associated push subscription 
      var request = new XMLHttpRequest();

      request.open('POST', 'https://127.0.0.1:7000');
      request.setRequestHeader('Content-Type', 'application/json');
    
      var messageObj = {
                          statusType: 'chatMsg',
                          name: nameInput.value,
                          msg: chatMsg,
                          endpoint: endpoint,
                          key: btoa(String.fromCharCode.apply(null, new Uint8Array(key)))
                        }
      console.log(messageObj);
      request.send(JSON.stringify(messageObj));
    })
  })
}

// function duplicateNameCheck(name) {
//   return new Promise(function(resolve, reject) {
//     var dupeValue;
//     var request = new XMLHttpRequest();

//     request.open('POST', 'https://127.0.0.1:7000');
//     request.setRequestHeader('Content-Type', 'application/json');

//     var messageObj = {
//                         statusType: 'dupeCheck',
//                         name: name,
//                         endpoint: null
//                      }

//     request.onreadystatechange = function() {
//       if (request.readyState === XMLHttpRequest.DONE) {
//         if (request.status === 200) {
//           if(request.responseText === 'true') {
//             console.log('has it returned anything?');
//             resolve(dupeValue = true);
//           } else {
//             resolve(dupeValue = false);
//           }
//         } else {
//           reject(Error('There was a problem with the request.'));
//         }
//       }
//     }


//     request.send(JSON.stringify(messageObj));
//   });
// }
