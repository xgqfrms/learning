var colors = require('colors');


const showjson = (data) => {
  // Output
  console.log('\n****************************************************\n'); 
  console.log('data = '.white, JSON.stringify(data).red);
  console.log('\n****************************************************\n'); 
  console.log('\n\n\ndata.a = ' + data.a);
  console.log('\n\n\ndata.a.bold = ' + data.a.bold);
  // number to String
  // 1 => "1"

  if (data.basic != null) {
    var us = typeof data.basic['us-phonetic'] === 'string' ? '美音: [' + data.basic['us-phonetic'] + ']' : '',
        uk = typeof data.basic['uk-phonetic'] === 'string' ? '英音: [' + data.basic['uk-phonetic'] + ']' : '';

    if (uk && us) {
      console.log('\n ' + us + '   ' + uk);
    } else if (typeof data.basic['phonetic'] == 'string') {
      console.log('\n ' + '拼音'.bold.underline + '：[' + data.basic['phonetic'] + ']');
    }

    console.log('\n ' + '翻译'.bold.underline + '：' + data.basic['explains'] + '\n');
  } else if (data.web != null) {
    console.log('\n ' + '网络释义:'.bold.underline);

    for (i = 0; i < data.web.length; i++) {
      temp = data.web[i];

      console.log('\n  ' + (i+1) + '. ' + temp.key);
      console.log('\n  ' + temp.value);
    }

    console.log('');
  } else {
    console.log('\n ' + '暂无释义.'.bold.underline);
  }
};

module.exports = showjson;
