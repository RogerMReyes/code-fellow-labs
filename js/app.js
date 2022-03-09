'use strict';

let userName = prompt('Welcome to my site! What\'s your name?');

let answerOne = prompt(`Hey ${userName}, Question time do you think I like video games?`).toLowerCase();
if(answerOne === 'y' || answerOne === 'yes'){
  alert('You\'re right! I am currently playing Elden Ring!');
  console.log(`${userName} is correct I like video games`);
} else if(answerOne === 'n' || answerOne === 'no') {
  alert('Nope, I\'ve been gaming since I could first hold a gameboy');
  console.log(`${userName} is wrong I do enjoy video games`);
}

let answerTwo = prompt('What about movies, do you think I love movies?').toLowerCase();
if(answerTwo === 'y' || answerTwo === 'yes'){
  alert('Right again I love watching movies especially in movie theaters');
  console.log(`${userName} is right I do love movies`);
} else if(answerTwo === 'n' || answerTwo === 'no') {
  alert('Wrong, I love movies!');
  console.log(`${userName} is wrong I do love movies`);
}

let answerThree = prompt('I\'m a movie lover so does that mean I like movie theater food?').toLowerCase();
if(answerThree === 'y' || answerThree === 'yes'){
  alert('Nope buying theater food isn\'t for me at the prices they\'re pushing.');
  console.log(`${userName} was wrong I don't like paying for movie theater food`);
} else if(answerThree === 'n' || answerThree === 'no') {
  alert('You\'re right! I just try to bring my own snacks but don\'t tell anyone.');
  console.log(`${userName} was right I don't like paying for movie theater food`);
}

let answerFour = prompt('When I am at home do you think my favorite streaming service is Netflix?').toLowerCase();
if(answerFour === 'y' || answerFour === 'yes'){
  alert('Yes! They\'ve got a little bit of everything on there.');
  console.log(`${userName} was right I do like Netflix`);
} else if(answerFour === 'n' || answerFour === 'no') {
  alert('Sorry Netlix is my favorite!');
  console.log(`${userName} was wrong Netflix is my favorite streaming service`);
}

let answerFive = prompt('Do you think I can binge watch an entire series?').toLowerCase();
if(answerFive === 'y' || answerFive === 'yes'){
  alert(`Yea it's probably not the healthiest thing for my body but sometimes it just happens. Well that's all the questions I have ${userName} talk to you again soon!`);
  console.log(`${userName} has binged watched a series before`);
} else if(answerFive === 'n' || answerFive === 'no') {
  alert(`You underestimate my power ${userName} series are no match for me! That's all my questions for now ${userName}! Talk to you again soon!`);
  console.log(`${userName} hasn't bing watched a series before`);
}


