/**
 * xgqfrms 2017
 * @copyright xgqfrms 2017-2050
 * @version 1.1.1
 */


const MyNotification = () => {
    if ("Notification" in window) {
        let ask = Notification.requestPermission();
        // console.log(`ask = ${ask}`);
        ask.then(permission => {
            let msg = new Notification(
                "title", {
                    body: "Hello, Notifications!",
                    icon: "https://cdn.xgqfrms.xyz/logo/favicon.png"
                }
            );
            msg.addEventListener("click", (event) => {
                // open a new link
                alert("close this Notification!");
            })
        });
    }
}
window.onload = MyNotification();


/*
http://stackoverflow.com/questions/6303964/javascript-open-a-given-url-in-a-new-tab-by-clicking-a-button


*/
