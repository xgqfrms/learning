var restColor = '#E2C10B',
    workColor = '#00ADB5';

var display = document.getElementById('timer-display'),
    displayStatus = document.getElementById('status'),
    startBtn = document.getElementById('button-start'),
    pauseBtn = document.getElementById('button-pause'),
    resetBtn = document.getElementById('button-reset'),
    moreWorkBtn = document.getElementById('more-work'),
    lessWorkBtn = document.getElementById('less-work'),
    moreRestBtn = document.getElementById('more-rest'),
    lessRestBtn = document.getElementById('less-rest'),
    displayUserWork = document.getElementById('user-work-display'),
    displayUserRest = document.getElementById('user-rest-display');

var canvas = document.getElementById('pomodoro-display-canvas'),
    ctx = canvas.getContext('2d');

var devicePixelRatio = window.devicePixelRatio || 1,
    backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio || 1,
    ratio = devicePixelRatio / backingStoreRatio;

if (typeof auto === 'undefined') {
        auto = true;
    }

if (auto && devicePixelRatio !== backingStoreRatio) {
  var canvasWidth = canvas.width,
      canvasHeight = canvas.height;

  canvas.width = canvasWidth * ratio;
  canvas.height = canvasHeight * ratio;
  canvas.style.width = canvasWidth + 'px';
  canvas.style.height = canvasHeight + 'px';

  ctx.scale(ratio, ratio);
}

var progressArc,
    canvasWidth = 400,
    canvasHeight = 400,
    centerX = 200,
    centerY = 200;

// Find a quick way to calculate the number of seconds in a given
var work = 25;
var rest = 5;

function getTotalSeconds(minutes, seconds) {
  return minutes * 60 + seconds;
}

function getSecFromObj(timeObj) {
  return timeObj.min * 60 + timeObj.sec;
}

function getMinSec(seconds) {
  var min = Math.floor(seconds / 60),
      sec = seconds - min * 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  return {
    min: min,
    sec: sec
  }
}

var runningTimer;
var timer = {
  isRunning: false,
  initWork: 25,
  initRest: 5,
  userWork: 25,
  userRest: 5,
  isWork: true,
  secondsLeft: 0,
  displayTime: function(timeObj) {
    var timeDisplayed = timeObj.min + " : " + timeObj.sec;
  },
  getIntoResetPotision: function() {
    var resetTime = getMinSec(this.getCorrectStartTime());
    this.displayTime(resetTime);
  },
  getCorrectStartTime: function() {
    if (timer.secondsLeft) {
      return timer.secondsLeft;
    } else {
      var workOrRest = timer.isWork ? timer.userWork : timer.userRest;
      return getTotalSeconds(workOrRest, 0);
    }
  },
  run: function(seconds) {
    timer.isRunning = true;

    // time to Start from in seconds.
    var startTimeSeconds = timer.getCorrectStartTime(),
        startTime = getMinSec(startTimeSeconds),
        currentTime = startTime,
        timeDisplayed = "",
        secondsLeft = startTimeSeconds;

    runningTimer = setInterval(function() {
      // stop the timer if the time has passed.
      if (secondsLeft === 0) {
        clearInterval(runningTimer);
        timer.isWork = !timer.isWork;
        timer.run();
      }

      // This block is to display the current time on the timer.
      currentTime = getMinSec(secondsLeft);
      timer.displayTime(currentTime);

      updateCanvas(secondsLeft, currentTime);
      secondsLeft -= 1;
      timer.secondsLeft = secondsLeft;
    }, 1000);

  },
  pause: function() {
    timer.isRunning = false;
    clearInterval(runningTimer);
  },
  reset: function() {
    timer.isRunning = false;
    clearInterval(runningTimer);
    timer.secondsLeft = 0;
    timer.getIntoResetPotision();
  },
  getMinSec: function(mins) {
    return 5;
  },
  increaseWork: function() {
    timer.userWork++;
    displayUserWork.innerHTML = timer.userWork;
    if (timer.isWork) {
      timer.reset();
      updateCanvas();
    }
  },
  decreaseWork: function() {
      timer.userWork--;
      if (timer.userWork <= 0) {
        timer.userWork = 1;
      }
      displayUserWork.innerHTML = timer.userWork;

    // NEW IF
    if (timer.isWork) {
      timer.reset();
      updateCanvas();
    }

  },
  increaseRest: function() {
      timer.userRest++;
      displayUserRest.innerHTML = timer.userRest;

    if (!timer.isWork) {
      timer.reset();
      updateCanvas();
    }
  },
  decreaseRest: function() {
      timer.userRest--;
      if (timer.userRest <= 0) {
        timer.userRest = 1;
      }
      displayUserRest.innerHTML = timer.userRest;

    if (!timer.isWork) {
      timer.reset();
      updateCanvas();
    }

  }
}

startBtn.addEventListener("click", function() {
  // Check if the timer is already running. if so either block the button, or start over every time it is pressed
  if (!timer.isRunning) {
    timer.run(25);
  }
  setTimeout(5000);
});

pauseBtn.addEventListener("click", function() {
  timer.pause();
});

resetBtn.addEventListener("click", function() {
  timer.reset();
  updateCanvas();
});

// work buttons
moreWorkBtn.addEventListener("click", function() {
  timer.increaseWork();
});

lessWorkBtn.addEventListener("click", function() {
  timer.decreaseWork();
});

// rest buttons
moreRestBtn.addEventListener("click", function() {
  timer.increaseRest();
});

lessRestBtn.addEventListener("click", function() {
  timer.decreaseRest();
});

canvas.addEventListener("click", function() {
  if (timer.isRunning) {
    timer.pause();
  } else {
    timer.run(timer.userWork);
  }
});

// Working with canvas
function drawCanvas() {
  var circle = new Path2D();
  ctx.fillStyle = "#EEEEEE";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#EEEEEE";

  circle.arc(canvasWidth/2, canvasHeight/2, 150, 0, Math.PI*2, true);
  ctx.stroke(circle);

  ctx.font = "48px PT Mono";
  if (timer.isWork) {
    ctx.fillText("Focus", centerX, 120);
  } else {
    ctx.fillStyle = restColor;
    ctx.fillText("RELAX", centerX, 120);
  }
}

function initCanvas() {
  var circle = new Path2D();
  ctx.textAlign = 'center';
  ctx.fillStyle = "#EEEEEE";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#EEEEEE";

  circle.arc(canvasWidth / 2, canvasHeight / 2,150, 0, Math.PI*2, true);
  ctx.stroke(circle);

  ctx.font = "48px PT Mono";
  if (timer.isWork) {
    ctx.fillText("Focus", centerX, 120);
  } else {
    ctx.fillText("RELAX!", centerX, 120);
  }

  ctx.font = "72px PT Mono";
  ctx.fillText(timer.initWork, centerX, centerY + 30);
}

function updateCanvas(secondsLeft, timeObj) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvas();
  if (timer.isWork) {
    var secondsOverall = timer.userWork * 60;
    ctx.fillStyle = workColor;
    ctx.strokeStyle = workColor;
  } else {
    var secondsOverall = timer.userRest * 60;
    ctx.fillStyle = restColor;
    ctx.strokeStyle = restColor;
  }

  var secondsPassed = secondsOverall - secondsLeft,
      percentageToDisplay = secondsPassed / secondsOverall,
      arcPartToShow = Math.PI * 2 * percentageToDisplay;

  ctx.lineWidth = 10;

  progressArc = new Path2D();

  if (arcPartToShow == 2 * Math.PI) {
    arcPartToShow = 0.001;
  }
  progressArc.arc(canvasWidth / 2, canvasHeight / 2, 150, -Math.PI/2, arcPartToShow - Math.PI/2, false);
  ctx.stroke(progressArc);

  // show time
  var timeDisplayedOnCanvas;
  if (timer.isRunning) {
    timeDisplayedOnCanvas = timeObj.min + ":" + timeObj.sec;
  } else {
    if (timer.isWork) {
      timeDisplayedOnCanvas = timer.userWork;
    } else {
      timeDisplayedOnCanvas = timer.userRest;
    }
  }

  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';
  ctx.font = "72px PT Mono";
  ctx.fillText(timeDisplayedOnCanvas, centerX, centerY + 30);
}

function init() {
  initCanvas();
}


document.addEventListener("DOMContentLoaded", function(event) {
  init();
});




//
