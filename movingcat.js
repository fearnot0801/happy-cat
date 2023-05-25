// dancing cat 
var box = document.querySelector('.dancing_cat');
var isDragging = false;
var previousX;
var previousY;

box.addEventListener('mousedown', function(e) {
    isDragging = true;
    previousX = e.clientX;
    previousY = e.clientY;
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var deltaX = e.clientX - previousX;
    var deltaY = e.clientY - previousY;
    var boxPosition = box.getBoundingClientRect();
    box.style.left = boxPosition.left + deltaX + 'px';
    box.style.top = boxPosition.top + deltaY + 'px';
    previousX = e.clientX;
    previousY = e.clientY;
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

