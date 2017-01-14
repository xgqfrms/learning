/* progress indicator */
(function () {
  // var pageHeight = document.documentElement.scrollHeight;
  var article = document.querySelector('.article');
  var viewportHeight = document.documentElement.clientHeight;
  var articleHeight = article.getBoundingClientRect().height;
  var prog = document.querySelector('.progress-indicator');
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