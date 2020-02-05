let userBar
let xUserBar = 0
let yUserBar = 380
let hUserBar = 10
let wUserBar = 75
let speedUserBar = 5

let ball
let xBall = 300
let yBall = 200
let rBall = 5
let xSpeedBall = 5
let ySpeedBall = 5

function setup() {
    createCanvas(600, 400)
}

function draw() {
    background(222)
    initializeElements()
    moveBar()
    moveBall()
    checkCollide()
}

function initializeElements() {
    fill(0)
    userBar = rect(xUserBar, yUserBar, wUserBar, hUserBar)
    ball = circle(xBall, yBall, (rBall * 2))
}

function moveBar() {
    // move bar
    if (keyIsDown(LEFT_ARROW) && xUserBar > 0) {
        xUserBar -= speedUserBar
    } else if (keyIsDown(RIGHT_ARROW) && xUserBar + wUserBar < 600) {
        xUserBar += speedUserBar
    }
}

function moveBall() {
    xBall += xSpeedBall
    yBall += ySpeedBall
    if (xBall > width - rBall || xBall < rBall) {
        xSpeedBall *= -1
    }
    if (yBall > height - rBall || yBall < rBall) {
        ySpeedBall *= -1
    }
}

function checkCollide() {
    let collide = collideRectCircle(xUserBar, yUserBar, wUserBar, hUserBar, xBall, yBall, (rBall * 2))
    if (collide) {
        xSpeedBall *= -1
    }
}