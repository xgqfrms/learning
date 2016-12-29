// Web Notification API  

// permission = default | permission = granted | permission = denied

(() => {
    // let is only available in {}
    if ("Notification" in window) {
        console.log("Web Notification API is supported by this browser!");
        let permissionx = Notification.permission;
        console.log(`permissionx = ${permissionx}`);
        if (permissionx === "denied" || permissionx === "granted") {
            return ;
        }
        let latestVersion = document.querySelector(".js-currentVersion").textContent;
        // Notification.requestPermission();
        // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
        Notification
            .requestPermission()
            .then(() => {
                let title = `Click to see what's new in v${latestVersion}`;
                let options = {
                    body: `https://github.com/xgqfrms/xgqfrms/releases/v${latestVersion}`,
                    icon: "http://www.xgqfrms.xyz/images/icon.png",
                    link: `https://github.com/xgqfrms/xgqfrms/releases/v${latestVersion}`
                };
                var notification = new Notification(title, options);
                if (ture) {
                    notification.onclick = () => {
                        window.open(`https://github.com/xgqfrms/xgqfrms/releases/`);
                    };
                }
                setTimeout(notification.close.bind(notification), 5000);
                //alert(`title = ${notification.title}\n notification.options = ${notification.options}`);
                console.log(notification.title);
            });
    }else{
        console.log("Your old browser doesn't support Web Notification API!");
    }
})();


/*
var myNotification = new Notification(title, options);
var options = {
      body: theBody,
      icon: theIcon
}
var n = new Notification(theTitle,options);
*/


 

(() => {
    // let is only available in {}
    if ("Notification" in window) {
        console.log("Web Notification API is supported by this browser!");
        let permissionx = Notification.permission;
        console.log(`permissionx = ${permissionx}`);
        if (permissionx === "denied" || permissionx === "granted") {
            return ;
        }
        // Notification.requestPermission();
        // Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
        Notification
            .requestPermission()
            .then(() => {
                let notification = new Notification("Hello, world!");
                alert(notification);
            });
    }else{
        console.log("Your old browser doesn't support Web Notification API!");
    }
})();



let displayNotification = (body, icon, title="Web Notification API", link="www.xgqfrms.xyz", duration=5000) => {
    link = link;
    duration = duration;
    let options = {
        body: body,
        icon: icon
    };
    let n = new Notification(title, options);
    if (link) {
        n.onclick = () => {
            window.open(link);
        };
    }
    setTimeout(n.close.bind(n), duration);
}



let checkVersion = () => {
    let latestVersion = document.querySelector(".js-currentVersion").textContent;
    let currentVersion = localStorage.getItem("conciseVersion");
    if (currentVersion === null || currentVersion < latestVersion ) {
        displayNotification(
            `Click to see what's new in v${latestVersion}`,
            "http://www.xgqfrms.xyz/images/icon.png",
            "A new version of Concise is available",
            `https://github.com/xgqfrms/xgqfrms/releases/v${latestVersion}`
    );

    localStorage.setItem("conciseVersion", latestVersion);
    }
}











