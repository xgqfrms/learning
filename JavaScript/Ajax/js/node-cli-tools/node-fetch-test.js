var fetch = require('node-fetch');

fetch('https://api.github.com/users/github')
.then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});
