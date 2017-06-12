#!/usr/bin/env node

/**
 * [nct: fetch data]
 * @type {[type]}
 */

const fetch = require('node-fetch');
const showdata = require('./showdata');

const nct = (username, repo) => {
    fetch(`https://api.github.com/repos/${username}/${repo}/commits`,{
        data: {
            client_id: '08ecc2f68d922f18800e',
            client_secret: '5846d428b5340812b76c9637eceaee979340b922'
        }
    })
    .then((response) => response.json())
    .then((json)=> {
        return repos = json;
    })
    .then((repos)=>{
        showdata(repos);
    });
};

module.exports = nct;

