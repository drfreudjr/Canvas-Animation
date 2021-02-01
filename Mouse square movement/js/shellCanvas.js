/* Javascript Shell */
// 'use strict';
let cl = console.log;
let ele = document.querySelector("canvas")
let ctx = ele.getContext("2d")

let width = height = 50;
let startX = startY = 10;
let endX

let x = startX
let y = startY
let duration  = 0



function logic () {
    max = ele.width - width
    duration += 0.02
    l = lerp(startX, endX, duration)
    if (l < max && l > 0 && endX != x)
    {
        x = l;
        requestAnimationFrame(draw)
    }
    else {
        duration = 0;
    }
}

function lerp(start, end, speed) {
    return start + (end - start) * speed
}

function draw()  {
    ctx.clearRect(0, 0, ele.width, ele.height);
    // This sets the fill colour to red
    ctx.fillStyle = "#ff0000";
    // fillRectangle(x, y, width, height);
    ctx.fillRect(x, y, width, height);
}

ele.addEventListener('mousemove', function(evt) {
    startX = x;
    endX = evt.clientX;
})

requestAnimationFrame(draw);
setInterval(logic, 1000/60);