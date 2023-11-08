// Grab the element
var magicBox = document.getElementById('magicBox');

// Add an event listener for the mouse moving over the box
magicBox.addEventListener('mousemove', function() {
  // Change the background color when the mouse moves over it
  this.style.backgroundColor = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
});