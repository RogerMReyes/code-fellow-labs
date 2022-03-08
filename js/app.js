'use strict';

let userName = prompt('Welcome to my site! What\'s your name?');

let answerOne = prompt(`Hey ${userName}, Do you like video games?`).toLowerCase();
if(answerOne === 'y' || answerOne === 'yes'){
  alert('Hey I like to play video games too!');
  console.log(`${userName} also like to play video games`);
} else if(answerOne === 'n' || answerOne === 'no') {
  alert('That\'s alright not everyone likes to play video games.');
  console.log(`${userName} doesn't like to play video games`);
}

let answerTwo = prompt('Have you seen the new Batman movie?').toLowerCase();
if(answerTwo === 'y' || answerTwo === 'yes'){
  alert('Dang, I haven\'t seen it yet but I heard it\'s 3 hours long.');
  console.log(`${userName} has watched the Batman movie`);
} else if(answerTwo === 'n' || answerTwo === 'no') {
  alert('That makes two. I haven\'t seen it either.');
  console.log(`${userName} hasn't seen the Batman movie`);
}

let answerThree = prompt('Do you usually buy movie theater food?').toLowerCase();
if(answerThree === 'y' || answerThree === 'yes'){
  alert('Yea buying theater food isn\'t for me at the prices they\'re pushing.');
  console.log(`${userName} has watched the Batman movie`);
} else if(answerThree === 'n' || answerThree === 'no') {
  alert('Same here I try to just bring my own snacks but don\'t tell anyone.');
  console.log(`${userName} hasn't seen the Batman movie`);
}

let answerFour = prompt('My main streaming service is Netflix. Do you use it too?').toLowerCase();
if(answerFour === 'y' || answerFour === 'yes'){
  alert('They\'ve got a little bit of everything on there.');
  console.log(`${userName} watches Netflix`);
} else if(answerFour === 'n' || answerFour === 'no') {
  alert('Wow, Netflix is one of the big ones I\'m surprised.');
  console.log(`${userName} doesn't watch Netflix`);
}

let answerFive = prompt('Have you ever binge watched an entire series in one sitting?').toLowerCase();
if(answerFive === 'y' || answerFive === 'yes'){
  alert(`Yea it's probably not the healthiest thing for our bodies but sometimes it just happens. Well that's all the questions I have ${userName} talk to you again soon!`);
  console.log(`${userName} has binged watched a series before`);
} else if(answerFive === 'n' || answerFive === 'no') {
  alert(`You must have some strong willpower ${userName}! Well that's it for now talk to you again soon!`);
  console.log(`${userName} hasn't bing watched a series before`);
}


