const colors = require('colors');
module.exports = (data) => {
    let i, temp, word = data.query;
    console.log('\n ' + word.bold);
    let db = data.basic,
        dw = data.web;
    if (data.basic != null) {
        let us = typeof db["us-phonetic"] === 'string'
                ? `美音: [${db["us-phonetic"]}]`
                : '',
            uk = typeof db["uk-phonetic"] === 'string'
                ? `英音: [${db["uk-phonetic"]}]` 
                : ''; 
        if (uk && us) {
            console.log(`\n${us}\t${uk}\n`);
        }
        else if (typeof db["phonetic"] === 'string') {
            console.log(`拼音：`.bold.underline + `[${db["phonetic"]}]\n`);
        }
        console.log(`翻译：`.bold.underline + `${db["explains"]}\n`);
    }
    else if(dw != null) {
        console.log(`网络释义: `.bold.underline);
        for (let i = 0; i < dw.length; i++) {
            temp = dw[i];
            console.log(`\n\t${i+1}.${temp.key}`);
            console.log(`\n\t${temp.value}`);
        }
        console.log(`\ndata.web.length = ${dw.length}`);
    }else {
        console.log(`\n暂无释义!`.bold.underline.red);
    }
};
