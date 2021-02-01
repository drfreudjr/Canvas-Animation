/* Javascript Shell */
// 'use strict';
let cl = console.log;
let ele = document.querySelector("canvas")
let ctx = ele.getContext("2d")

let startX = startY = 10;
let endX = ele.width - 50

let x = startX
let y = startY
var duration  = 0
var width = height = 50;

function lerp(start, end, speed) {
    return start + (end - start) * speed
}

function logic () {
    duration += 0.02
    x = lerp(startX, endX, duration)
    if (x < ele.width - width) requestAnimationFrame(draw);
    }

function draw()  {
    ctx.clearRect(0, 0, ele.width, ele.height);
    // This sets the fill colour to red
    ctx.fillStyle = "#ff0000";
    // fillRectangle(x, y, width, height);
    ctx.fillRect(x, y, width, height);
}

requestAnimationFrame(draw);
setInterval(logic, 1000/60);