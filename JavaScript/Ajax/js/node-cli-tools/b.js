const colors = require('colors');
const fetch = require('node-fetch');


// const showjson = require('./a');


// const showcommits = require('./git');

/*

let data = {a: "1", b: "2", c: "3"};
console.log('data = '.red, JSON.stringify(data).white); 


fetch('https://cdn.xgqfrms.xyz/json/badges.json')
.then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});

let json_url = `
http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=${query_key}
`;
*/


/*

let query_key = process.argv[2];

let json_url = `
http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=${query_key}
`;

console.log(`query_key =`, query_key);

console.log(`json_url =`, json_url);

fetch(json_url)
.then((res) =>{
    // console.log(`res =`, res);
    data = res.json();
    console.log(`data =`, data);
    return data;
}).then((json) =>{
    console.log(`json =`, json);
    showjson(json);
    // showjson(data);
});


*/

/*

fetch(`https://api.github.com/users/xgqfrms-GitHub/Node-CLI-Tools/commits`)
.then(function(response) {
    let json = response.json();
    console.log(`response = ${json}`);
    return json;
})
.then(function(json) {
    console.log('parsed json: ', json);
    console.log('parsed json: ', json[0]);
    console.log('parsed json: ', json[1].name);
});

*/

/*
let username = `xgqfrms-GitHub`;

fetch(`https://api.github.com/users/${username}/repos`,{
    data: {
        client_id: '08ecc2f68d922f18800e',
        client_secret: '5846d428b5340812b76c9637eceaee979340b922'
    }
})
.then((response) => response.json())
.then((json)=> {
    console.log(`json = ${json}`);
    return repos = json;
})
.then((repos)=>{
    console.log(`repos = ${repos}`);
    console.log(`repos = ${repos.length}`);
    console.log(`repos$ 0  = ${repos[0]}`);
    console.log(`repos$ 1  = ${repos[1]}`);
    for (let i = 0; i < repos.length; i++) {
        console.log(`repos${i}  = ${repos[i]}`);
    }
});



*/



let username = process.argv[2] ? process.argv[2] : `xgqfrms-GitHub`;
    repo = process.argv[3] ? process.argv[3] : `Node-CLI-Tools`;

fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
    data: {
        client_id: '08ecc2f68d922f18800e',
        client_secret: '5846d428b5340812b76c9637eceaee979340b922'
    }
})
.then((response) => response.json())
.then((json)=> {
    // console.log(`json = ${json}`);
    return repos = json;
})
.then((repos)=>{
    // console.log(`repos = ${repos}`);
    console.log(`repos = ${repos.length}`);
    for (let i = 0; i < repos.length; i++) {
        console.log(`\n\nrepos${i}\n`);
        console.log(`${i} sha = ${repos[i].sha}`);
        console.log(`${i} url = ${repos[i].url}`);
        console.log(`${i} login = ${repos[i].author.login}`);
        console.log(`${i} avatar_url = ${repos[i].author.avatar_url}`);
        console.log(`${i} commit.message = ${repos[i].commit.message}`);
        console.log(`${i} url = ${repos[i].commit.url}`);
        console.log(`${i} date = ${repos[i].commit.author.date}`);
        console.log(`${i} name = ${repos[i].commit.author.name}`);
    }
});









