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