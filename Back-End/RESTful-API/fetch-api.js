// https://api.mlab.com/api/1/databases/node-mongodb/collections/test?apiKey=pa4Yku0O7y6CHLqKwDGlLKSfkdPfQprR
const url = `https://api.mlab.com/api/1/databases/node-mongodb/collections/test?apiKey=pa4Yku0O7y6CHLqKwDGlLKSfkdPfQprR`;

fetch(url, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
        'Accept': 'application/json',
        'Access-Control-Request-Method': 'PUT',
        'Content-Type': 'application/json'
    },
    credentials: "same-origin"
}).then(function(response) {
    response.status; //=> number 100–599
    response.statusText; //=> String
    response.headers; //=> Headers
    response.url; //=> String

    return response.text()
}, function(error) {
    error.message; //=> String
})



// https://gist.github.com/xgqfrms-GitHub/636260e8332f0fe4f530fe040ffd3741

fetch('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest', {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Api-Key': `0987b00e542141369049e647701b65d9`
    }
}).then(function(response) {
    return response.json()
}).then(function(json) {
    console.log('parsed json: ', json)
}).catch(function(error) {
    console.log('parsing failed: ', error)
});