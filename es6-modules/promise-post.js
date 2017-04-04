/**
 * xgqfrms 2017.01.01
 * @copyright xgqfrms 2017-2050
 * @version 1.1.1
 * @link https://www.xgqfrms.xyz/
 * @repo https://cdn.xgqfrms.xyz/es6-modules/promise-post.js
 */



const post(url) => {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        let req = new XMLHttpRequest();
        req.open('POST', url);
        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        // Make the request
        req.send();
    });
}


export default post;















