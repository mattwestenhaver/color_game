var buttons = $('.button-box button')
var colorDisplay = $('#current-color')
var colors = ['red', 'green', 'blue', 'purple']
var clickedColor
var currentColor
var randomColor
var score = 0

start()

// FUNCTIONS:

// add listeners to all the buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', buttonClickHandler)
}

// store which button was clicked
function buttonClickHandler() {
  console.log("you clicked the " + this.innerHTML + " button")
  clickedColor = this.innerHTML
  matchCheck()
}

// check to see if the clicked button matches the color on the screen
// adjust the score accordingly
function matchCheck() {
  if (clickedColor == currentColor) {
    console.log("you got it")
    score = score + 1
  } else {
    console.log('not quite')
    score = score - 3
  }
  $('.score').text("score: " + score)
  start()
}

// randomize the color on the screen
// randomize the color of the text on the screen
function start() {
  setTimeout(function(){
    currentColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(currentColor)
    colorDisplay.text(currentColor)
    randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        $('#current-color').css('color', randomColor);
  }, 700);
}
