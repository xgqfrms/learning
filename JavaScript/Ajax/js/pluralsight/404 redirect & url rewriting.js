// https://github.com/xgqfrms/xgqfrms/issues/12




(function() {
    document.body.className = 'redirecting';
    var slug = location.pathname.slice(1);
    xhr({
        src: 'secrets.json',
        onsuccess: function() {
            var slugs = JSON.parse(this.responseText);
            var hash = slugs[slug];
            if (hash) {
                // Redirect
                var url = hash.indexOf('http') == 0 ? hash : 'http://dabblet.com/gist/' + hash;
                $('section.redirecting > p').innerHTML = 'Redirecting to <a href="' + url + '">' + url + '</a>…';
                location.href = url;
            } else {
                document.body.className = 'error not-found';
            }
        },
        onerror: function() {
            document.body.className = 'error json';
        }
    });
})();