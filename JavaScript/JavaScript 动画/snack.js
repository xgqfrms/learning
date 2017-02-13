/*
http://www.webhek.com/using-requestanimationframe
*/



var snake = {

    canvas: document.getElementById("canvas"),
    ctx: document.getElementById("canvas").getContext('2d'),

    // how big the "squares" will be
    xDis: 0,
    yDis: 0,

    // where the square will be drawn
    posX: 0,
    posY: 0,

    repeater: 0, // ID of requestAnimationFrame

    divisions: 30, // breaks frame into X × X squares

    init: function() {

        // Set up "Two Dimensional" Array to remember what is on and off
        this.memory = new Array(this.divisions - 1);
        for (var i = 0; i < (this.divisions + 1); i++) {
            this.memory[i] = new Array(this.divisions - 1);
        }

        // Size the canvas appropriately
        var width = window.innerWidth;
        var height = window.innerHeight;
        snake.canvas.width = width;
        snake.canvas.height = height;

        // Size of squares is canvas width broken into equal chunks
        snake.xDis = width / snake.divisions;
        snake.yDis = height / snake.divisions;

        // All pink, baby
        this.ctx.fillStyle = "#EA80B0";

        // Random starting position
        this.posX = Math.floor(Math.random() * this.divisions);
        this.posY = Math.floor(Math.random() * this.divisions);

        // global
        drawLoop = function() {
            snake.repeater = requestAnimationFrame(drawLoop);
            snake.oneMovement();
        }
        drawLoop();

    },

    drawSquare: function(x, y) {
        // Actually draw it
        snake.ctx.fillRect(x * this.xDis, y * this.yDis, this.xDis, this.yDis);

        // Record it in memory
        snake.memory[x][y] = true;
    },

    checkPossiblePositions: function() {

        var posToReturn = [];

        if (this.posX == 0) {
            // can't go left
        } else if (this.memory[this.posX - 1][this.posY] == true) {
            // left occupied
        } else {
            posToReturn.push("left");
        }

        if (this.posX == this.divisions) {
            // can't go right
        } else if (this.memory[this.posX + 1][this.posY] == true) {
            // right occupied
        } else {
            posToReturn.push("right");
        }

        if (this.posY == 0) {
            // can't go up
        } else if (this.memory[this.posX][this.posY - 1] == true) {
            // top occupied
        } else {
            posToReturn.push("up");
        }

        if (this.posY == this.divisions) {
            // can't go down
        } else if (this.memory[this.posX][this.posY + 1] == true) {
            // bottom occupied
        } else {
            posToReturn.push("down");
        }

        return posToReturn;

    },

    startNewRound: function() {
        // Stop! 
        cancelAnimationFrame(this.repeater);

        // Find new spot
        var newSpot = this.findEmpty();

        if (newSpot == "nope") {

            // Absolutely done, start over.

            // clear canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // start over
            this.init();

        } else {

            // Start over from new position
            this.posX = newSpot[0];
            this.posY = newSpot[1];

            // Actually restart      
            drawLoop();

        }
    },

    oneMovement: function() {

        this.drawSquare(this.posX, this.posY);

        var possiblePos = this.checkPossiblePositions();

        var numPossible = possiblePos.length;

        if (numPossible == 0) {

            this.startNewRound();

        } else {

            var randomDir = Math.floor(Math.random() * numPossible);

            if (possiblePos[randomDir] == "left") {
                this.posX--;
            }
            if (possiblePos[randomDir] == "right") {
                this.posX++;
            }
            if (possiblePos[randomDir] == "up") {
                this.posY--;
            }
            if (possiblePos[randomDir] == "down") {
                this.posY++;
            }

        }

    },

    findEmpty: function() {

        for (var x = 0; x < (this.divisions + 1); x++) {
            for (var y = 0; y < (this.divisions + 1); y++) {
                if (!this.memory[x][y]) {
                    return [x, y];
                }
            }
        }

        return "nope";

    }

}

// need this loop to make sure canvas sizes right on CodePen
setTimeout(function() {

    snake.init();

}, 10);
