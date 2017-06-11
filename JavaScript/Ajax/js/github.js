// document.onload = (() => alert('ok'))();
// 
// https://developer.github.com/v3/#rate-limiting
// https://developer.github.com/v3/rate_limit/


/*

// response.json()

fetch(`https://api.github.com/users/xgqfrms/repos`)
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




fetch(`https://api.github.com/users/xgqfrms/repos`, {
    method: 'get',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(function(response) {
    return response.json();
    // json() ???
})
.then(function(json) {
    console.log('parsed json: ', json);
    console.log('parsed json: ', json[0]);
    console.log('parsed json: ', json[1].name);
})
.catch(function(error) {
    console.log('parsing failed: ', error);
});




fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then((res) => res.json())
.then((data) => console.log(data));


fetch(`https://cdn.xgqfrms.xyz/json/badges.json`)
.then((res) => JSON.parse(res))
.then((data) => {
    console.log(data.user);
    console.log(data.courses);
    console.log(data.badges);
});



*/





document.onload = (() => {
    alert('ok');
    let keyListener = document.querySelector('#searchUser');
    // 
    keyListener.addEventListener('keypress', (e) => {
        if(e.keyCode === 13){
            let username = e.target.value;
            console.log(`username = ${username}`);
            fetch(`https://api.github.com/users/${username}`,{
                data: {
                    client_id: '08ecc2f68d922f18800e',
                    client_secret: '5846d428b5340812b76c9637eceaee979340b922'
                }
            })
            .then((response) => response.json())
            .then((json)=> console.log(`json = ${json}`));
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
        }else{
            console.log(`e.keyCode = ${e.keyCode}`);
        }
    });
})();






$(document).ready(function() {
    $('#searchUser').on('keyup', function(e) {
        let username = e.target.value;
        // Make request to Github
        $.ajax({
            url: 'https://api.github.com/users/' + username,
            data: {
                client_id: '08ecc2f68d922f18800e',
                client_secret: '5846d428b5340812b76c9637eceaee979340b922'
            }
        })
        .done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: '08ecc2f68d922f18800e',
                    client_secret: '5846d428b5340812b76c9637eceaee979340b922',
                    sort: 'created: asc',
                    per_page: 5
                }
            })
            .done(function(repos) {
                $.each(repos, function(index, repo) {
                    $('#repos').append(`
                      <div class="well">
                        <div class="row">
                          <div class="col-md-7">
                            <strong>${repo.name}</strong>: ${repo.description}
                          </div>
                          <div class="col-md-3">
                            <span class="label label-default">Forks: ${repo.forks_count}</span>
                            <span class="label label-primary">Watchers: ${repo.watchers_count}</span>
                            <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                          </div>
                          <div class="col-md-2">
                            <a href="${repo.html_url}" target="_blank" class="btn btn-default">Repo Page</a>
                          </div>
                        </div>
                      </div>
                    `);
                });
            });
            $('#profile').html(`
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title">${user.name}</h3>
                  </div>
                  <div class="panel-body">
                    <div class="row">
                      <div class="col-md-3">
                        <img class="thumbnail avatar" src="${user.avatar_url}">
                        <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                      </div>
                      <div class="col-md-9">
                      <span class="label label-default">Public Repos: ${user.public_repos}</span>
                      <span class="label label-primary">Public Gists: ${user.public_gists}</span>
                      <span class="label label-success">Followers: ${user.followers}</span>
                      <span class="label label-info">Following: ${user.following}</span>
                      <br><br>
                      <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="page-header">Latest Repos</h3>
                <div id="repos"></div>
              `);
        });
    });
});
