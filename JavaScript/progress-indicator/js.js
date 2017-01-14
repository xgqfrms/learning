/* progress indicator */
(function () {
  // var pageHeight = document.documentElement.scrollHeight;
    let article = document.querySelector('.article'),
        viewportHeight = document.documentElement.clientHeight,
        articleHeight = article.getBoundingClientRect().height,
        prog = document.querySelector('.progress-indicator');
    window.addEventListener('scroll', function () {
        window.requestAnimationFrame(function () {
            var perc = Math.max(0, Math.min(1, (viewportHeight - article.getBoundingClientRect().top) / articleHeight));
            updateProgress(perc);
        });
    });
    function updateProgress(perc) {
        prog.style.width = perc * 100 + '%';
    }
})();