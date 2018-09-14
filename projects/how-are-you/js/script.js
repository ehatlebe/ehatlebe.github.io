var happy = [
  "It\'s time for a 5 minute Michael Jackson dance break.",
  "Rock on!",
  "You're awesome!",
  "Smiles are contageous, share one with someone.",
  "When you're happy and you know it, clap your hands!"
]

var sad = [
  "It\'s time for a 5 minute Michael Jackson dance break.",
  "Hug.",
  "I am glad you\'re you.",
  "I am sending you sunshine!",
  "This too shall pass."
];

var defeated = [
  "It\'s time for a 5 minute Michael Jackson dance break.",
  "Keep going.",
  "Our struggles can be our greatest teachers.",
  "Real strength comes from picking ourselves up after a fall and continuing to move in the direction of our dreams.",
  "I believe in you."
];

var lost = [
  "It\'s time for a 5 minute Michael Jackson dance break.",
  "Find a way to let your light shine. You have something special to share, and the world will be better for it.",
  "Maybe it's time for an adventure.",
  "Do something nice for someone else. It helps.",
  "It is up to us to build a life we love. No one will do it for us."
];

var mad = [
  "It\'s time for a 5 minute Michael Jackson dance break.",
  "We are the first victim of our anger.",
  "Take a deep breath.",
  "Don't bite the hook, you will regret it.",
  "What about taking a walk?"
];

var grateful = [
  "It\'s time for a 5 minute Michael Jackson dance break.",
  "Who is someone you appreciate? Tell them.",
  "Everyday is a gift, there is so much to be greatful for.",
  "Live your life with arms wide open.",
  "Gratitude is like a muscle, flex it daily!"
];

/* in newResponse, randomNumber generates a valid array index number happyResponse array and then the happyResponse goes into the HTML element newResponse */
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