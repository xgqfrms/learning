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
        }).done(function(user) {
            $.ajax({
                url: 'https://api.github.com/users/' + username + '/repos',
                data: {
                    client_id: '08ecc2f68d922f18800e',
                    client_secret: '5846d428b5340812b76c9637eceaee979340b922',
                    sort: 'created: asc',
                    per_page: 5
                }
            }).done(function(repos) {
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
                  <a href="${repo.html_url}" target="_blank" class="btn btn-default">仓库页面</a>
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
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">查看个人资料</a>
              </div>
              <div class="col-md-9">
              <span class="label label-default">公开的仓库: ${user.public_repos}</span>
              <span class="label label-primary">公开的Gists: ${user.public_gists}</span>
              <span class="label label-success">追随者: ${user.followers}</span>
              <span class="label label-info">追随的人: ${user.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">公司: ${user.company}</li>
                <li class="list-group-item">网站/博客: ${user.blog}</li>
                <li class="list-group-item">位置: ${user.location}</li>
                <li class="list-group-item">成为会员时间: ${user.created_at}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 class="page-header">最新的仓库</h3>
        <div id="repos"></div>
      `);
        });
    });
});
