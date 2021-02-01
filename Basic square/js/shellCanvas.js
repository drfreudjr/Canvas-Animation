/* Javascript Shell */
// 'use strict';
let cl = console.log;
let ele = document.querySelector("canvas")
let ctx = ele.getContext("2d")

var x = y = 10;
var width = height = 50;

function logic () {
    x += 10;
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