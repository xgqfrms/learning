// git


var colors = require('colors');


const showjson = (data) => {
  // Output
  console.log('\n****************************************************\n'); 
  console.log('data = '.white, JSON.stringify(data).red);
  console.log('\n****************************************************\n'); 
  // console.log('\n\n\ndata.a = ' + data.a);
  // console.log('\n\n\ndata.a.bold = ' + data.a.bold);
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


/*

{
    "sha":"c66c9a9b21b1799cc0d069982a0ff0971ea2d8e3",
    "commit":{
        "author":{
            "name":"anonymous",
            "email":"xgqfrms@gmail.com",
            "date":"2017-06-11T15:28:34Z"
        },
        "committer":{
            "name":"GitHub",
            "email":"noreply@github.com",
            "date":"2017-06-11T15:28:34Z"
        },
        "message":"backup",
        "tree":{
            "sha":"f9bf73ffcb5911499b989b31a386dac75d24cb96",
            "url":"https://api.github.com/repos/xgqfrms-GitHub/Node-CLI-Tools/git/trees/f9bf73ffcb5911499b989b31a386dac75d24cb96"
        },
        "url":"https://api.github.com/repos/xgqfrms-GitHub/Node-CLI-Tools/git/commits/c66c9a9b21b1799cc0d069982a0ff0971ea2d8e3",
        "comment_count":0
    },
    "url":"https://api.github.com/repos/xgqfrms-GitHub/Node-CLI-Tools/commits/c66c9a9b21b1799cc0d069982a0ff0971ea2d8e3",
    "html_url":"https://github.com/xgqfrms-GitHub/Node-CLI-Tools/commit/c66c9a9b21b1799cc0d069982a0ff0971ea2d8e3",
    "comments_url":"https://api.github.com/repos/xgqfrms-GitHub/Node-CLI-Tools/commits/c66c9a9b21b1799cc0d069982a0ff0971ea2d8e3/comments",
    "author":{
        "login":"xgqfrms-GitHub",
        "id":18028768,
        "avatar_url":"https://avatars0.githubusercontent.com/u/18028768?v=3",
        "gravatar_id":"",
        "url":"https://api.github.com/users/xgqfrms-GitHub",
        "html_url":"https://github.com/xgqfrms-GitHub",
        "followers_url":"https://api.github.com/users/xgqfrms-GitHub/followers",
        "following_url":"https://api.github.com/users/xgqfrms-GitHub/following{/other_user}",
        "gists_url":"https://api.github.com/users/xgqfrms-GitHub/gists{/gist_id}",
        "starred_url":"https://api.github.com/users/xgqfrms-GitHub/starred{/owner}{/repo}",
        "subscriptions_url":"https://api.github.com/users/xgqfrms-GitHub/subscriptions",
        "organizations_url":"https://api.github.com/users/xgqfrms-GitHub/orgs",
        "repos_url":"https://api.github.com/users/xgqfrms-GitHub/repos",
        "events_url":"https://api.github.com/users/xgqfrms-GitHub/events{/privacy}",
        "received_events_url":"https://api.github.com/users/xgqfrms-GitHub/received_events",
        "type":"User",
        "site_admin":false
    },
    "committer":{
        "login":"web-flow",
        "id":19864447,
        "avatar_url":"https://avatars0.githubusercontent.com/u/19864447?v=3",
        "gravatar_id":"",
        "url":"https://api.github.com/users/web-flow",
        "html_url":"https://github.com/web-flow",
        "followers_url":"https://api.github.com/users/web-flow/followers",
        "following_url":"https://api.github.com/users/web-flow/following{/other_user}",
        "gists_url":"https://api.github.com/users/web-flow/gists{/gist_id}",
        "starred_url":"https://api.github.com/users/web-flow/starred{/owner}{/repo}",
        "subscriptions_url":"https://api.github.com/users/web-flow/subscriptions",
        "organizations_url":"https://api.github.com/users/web-flow/orgs",
        "repos_url":"https://api.github.com/users/web-flow/repos",
        "events_url":"https://api.github.com/users/web-flow/events{/privacy}",
        "received_events_url":"https://api.github.com/users/web-flow/received_events",
        "type":"User",
        "site_admin":false
    },
    "parents":[
        {
            "sha":"02ec87944cbb16270ef307110731f3f63d0d970d",
            "url":"https://api.github.com/repos/xgqfrms-GitHub/Node-CLI-Tools/commits/02ec87944cbb16270ef307110731f3f63d0d970d",
            "html_url":"https://github.com/xgqfrms-GitHub/Node-CLI-Tools/commit/02ec87944cbb16270ef307110731f3f63d0d970d"
        }
    ]
},

*/


