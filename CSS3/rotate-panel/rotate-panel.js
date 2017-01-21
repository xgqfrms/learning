/*

http://codepen.io/xgqfrms/pen/XpRmxJ



*/


var rotate = 0;
var start = false;
var speed = 0;
var startRotate;
$('.turntable').on('click', function() {
    if (!start) {
        start = true;
        startRotate = setInterval(rotateTurntable, 16);
    } else {
        start = false;
    }
});

function rotateTurntable() {
    if (start && speed <= 15) {
        speed += 0.3;
    } else if (!start && speed >= 0.3) {
        speed -= 0.3;
    } else if (speed < 0.3) {
        speed = 0;
        clearInterval(startRotate);
    }
    console.log(speed)
    if (rotate < 360) {
        rotate = rotate + speed;
    } else {
        rotate = rotate - 360;
    }
    $('.turntable').css('transform', 'rotate(' + rotate + 'deg)');
}
