// ------VARIABLES------
var buttons = $('.button-box button')
var colorDisplay = $('#current-color')
var colors = ['red', 'green', 'blue', 'purple']
var clickedColor
var currentColor
var randomColor
var score = 0

// ask the user for their name for display message
var userName = prompt('what is your name?')

// ------ FUNCTIONS------

// start game
$('.start').on('click', function(){
  start();
  var count = 30;
  setInterval(function () {
    count --;
    if (count >= 0) {
      $('.timer').text(count);
    }
    if (count === 0) {
      alert('out of time ' + userName + '! you got ' + score + ' points!')
    }
  }, 1000);
})

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
    $('.start').text("got it!")
    score = score + 1
  } else {
    console.log('not quite')
    $('.start').text("idiot!")
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
  }, 300);
}
