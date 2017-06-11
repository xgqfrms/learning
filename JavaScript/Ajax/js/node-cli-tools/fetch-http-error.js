/**
 * https://github.com/github/fetch#handling-http-error-statuses
 * 
 */


fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then((response) => {
    console.log(`response.headers.get('Content-Type') = \n`, response.headers.get('Content-Type'));
    console.log(`response.headers.get('Date') = \n`, response.headers.get('Date'));
    console.log(`response.status = \n`, response.status);
    console.log(`response.statusText = \n`,response.statusText);
    return json = response.json();
})
.then(json => console.log(json));










const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

const parseJSON = (response) => response.json();

fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then(checkStatus)
.then(parseJSON)
.then((data) => {
    console.log('request succeeded with JSON response', data)
}).catch((error) => {
    console.log('request failed', error)
});
