/* emotion variables of possible responses */
var happy = [
  "It\'s time for a 5-minute dance break.",
  "Rock on!",
  "You\'re awesome!",
  "Smiles are contagious, share one.",
  "Carry this feeling with you."
]

var sad = [
  "It\'s time for a 5-minute dance break.",
  "Hug.",
  "I am glad you\'re you.",
  "I am sending you sunshine!",
  "This too shall pass.",
  "It's ok."
];

var defeated = [
  "It\'s time for a 5-minute dance break.",
  "Keep going.",
  "Our struggles can be our greatest teachers.",
  "Continue to move in the direction of our dreams.",
  "I believe in you."
];

var lost = [
  "It\'s time for a 5-minute dance break.",
  "Find a way to let your light shine.",
  "Maybe it's time for an adventure.",
  "Do something nice for someone else. It helps.",
  "It is up to us to build a life we love."
];

var mad = [
  "It\'s time for a 5-minute dance break.",
  "We are the first victim of our anger.",
  "Take a deep breath.",
  "Don't bite the hook, you will regret it.",
  "What about taking a walk?",
  "Step away from the computer."
];

var grateful = [
  "It\'s time for a 5-minute dance break.",
  "Who do you appreciate? Tell them.",
  "Everyday is a gift.",
  "Live your life with arms wide open.",
  "Gratitude is like a muscle, flex it daily!"
];

/* functions determine which random response to use depending on the emotion button selected and then the response is displayed in displayResponse */
function happyResponse() {
  var randomNumber = Math.floor(Math.random() * (happy.length));
  document.getElementById('displayResponse').innerHTML = happy[randomNumber];
}

function sadResponse() {
  var randomNumber = Math.floor(Math.random() * (sad.length));
  document.getElementById('displayResponse').innerHTML = sad[randomNumber];
}

function defeatedResponse() {
  var randomNumber = Math.floor(Math.random() * (defeated.length));
  document.getElementById('displayResponse').innerHTML = defeated[randomNumber];
}

function lostResponse() {
  var randomNumber = Math.floor(Math.random() * (lost.length));
  document.getElementById('displayResponse').innerHTML = lost[randomNumber];
}

function madResponse() {
  var randomNumber = Math.floor(Math.random() * (mad.length));
  document.getElementById('displayResponse').innerHTML = mad[randomNumber];
}

function gratefulResponse() {
  var randomNumber = Math.floor(Math.random() * (grateful.length));
  document.getElementById('displayResponse').innerHTML = grateful[randomNumber];
}
