#!/usr/bin/env node

/**
 * [showdata: show json data]
 * @type {[type]}
 */
const colors = require('colors');

const showdata = (repos) => {
    console.log(`repos = ${repos.length}`);
    console.log(`********************************************************\n\n\n`);
    for (let i = 0; i < repos.length; i++) {
        console.log(`\n\nrepos${i}\n`);
        console.log(`${i} sha = ${repos[i].sha}`.red);
        console.log(`${i} url = ${repos[i].url}`.white);
        console.log(`${i} login = ${repos[i].author.login}`.white);
        console.log(`${i} avatar_url = ${repos[i].author.avatar_url}`.rainbow);
        console.log(`${i} commit.message = ${repos[i].commit.message}`.white);
        console.log(`${i} url = ${repos[i].commit.url}`.red);
        console.log(`${i} date = ${repos[i].commit.author.date}`.white);
        console.log(`${i} name = ${repos[i].commit.author.name}`.red);
    }
};

module.exports = showdata;
