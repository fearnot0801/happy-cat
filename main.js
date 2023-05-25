var box = document.querySelector("body");

setInterval(function() {
    var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}, 500);
