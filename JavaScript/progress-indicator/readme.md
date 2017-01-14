# progress-indicator  




<div class="progress-indicator" style="width: 12.6479%;%;"></div>

.progress-indicator {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background-color: #ffdd57;
}


js width += scoll.height

12 += [0,100]


https://ruanyf.github.io/survivor/plan-b/employment.html



<div class="progress-indicator"></div>

https://ruanyf.github.io/survivor/assets/js/app.js


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

