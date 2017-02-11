# CryptoJS.AES  


https://code.google.com/archive/p/crypto-js/

https://groups.google.com/forum/#!topic/crypto-js/


https://github.com/ufo-github/forge




https://gist.github.com/xgqfrms-GitHub/8ebe401b4cee7d6c56bff2e012ef4d75








// 解密

var de = CryptoJS.AES.decrypt("U2FsdGVkX1/3vXBiL3ac3cEoYTaeHa30OEtnllDGfKOulwahpXKlVizvYQ8GWUYXa6cqJXj8PIKqvVLD59sPag==", "Secret Passphrase");

console.log(de.toString(CryptoJS.enc.Utf8));


// 加密
let enx = CryptoJS.AES.encrypt("xgqfrms 2017", "Secret Passphrase");


// decode 解码
console.log(`${enx.toString(CryptoJS.dec)}`);


// U2FsdGVkX1/pI1yeyctBcut49Vdwi8wExCIpEH3KbPQ=


// 解密
let dex = CryptoJS.AES.decrypt("U2FsdGVkX1/pI1yeyctBcut49Vdwi8wExCIpEH3KbPQ=", "Secret Passphrase");


// encode 编码 Utf8
console.log(`${dex.toString(CryptoJS.enc.Utf8)}`);



























