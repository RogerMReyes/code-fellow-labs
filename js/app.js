'use strict';

let userName = prompt('Welcome to my site! What\'s your name?');
let totalCorrect = 0;

function firstFiveQuestions() {
  let fiveAnswerArray = [];
  let yesOrNoArray = ['y', 'yes', 'n', 'no'];
  let fiveQuestionArray = [`Hey ${userName}, Question time do you think I like video games?`,
    'What about movies, do you think I love movies?',
    'I\'m a movie lover so does that mean I like movie theater food?',
    'When I am at home do you think my favorite streaming service is Netflix?',
    'Do you think I can binge watch an entire series?'];
  let yesResponseArray = ['You\'re right! I am currently playing Elden Ring!',
    'Right again I love watching movies especially in movie theaters',
    'Nope buying theater food isn\'t for me at the prices they\'re pushing.',
    'Yes! They\'ve got a little bit of everything on there.',
    `Yea it's probably not the healthiest thing for my body but sometimes it just happens. Am I right ${userName}.`];
  let noResponseArray = ['Nope, I\'ve been gaming since I could first hold a gameboy',
    'Wrong, I love movies!',
    'You\'re right! I just try to bring my own snacks but don\'t tell anyone.',
    'Sorry Netlix is my favorite!',
    `You underestimate my power ${userName} series are no match for me!`];
  for (let i = 0; i < fiveQuestionArray.length; i++) {
    fiveAnswerArray[i] = prompt(fiveQuestionArray[i]).toLowerCase();
    if (fiveAnswerArray[i] === yesOrNoArray[1] || fiveAnswerArray[i] === yesOrNoArray[2]) {
      alert(yesResponseArray[i]);
      if (i !== 2) {
        totalCorrect++;
        // console.log(totalCorrect);
      }
    } else {
      alert(noResponseArray[i]);
      if (i === 2) {
        totalCorrect++;
        // console.log(totalCorrect);
      }
    }
  }
  // console.log(totalCorrect);
}
firstFiveQuestions();

function guessingFingersGame() {
  let answerSix = Math.floor(Math.random() * 10);
  let maxRetry = 3;
  let userGuessSix = parseInt(prompt(`Alright ${userName}, I've got a game for you. How many fingers am I holding up right now?`));
  for (let i = 0; i < maxRetry; i++) {
    if (userGuessSix !== answerSix) {
      if (userGuessSix > answerSix) {
        userGuessSix = parseInt(prompt(`Sorry ${userName}, Wrong answer you have ${maxRetry - i} chances left! I'll give you a hint the answer is less than ${userGuessSix}`));
      } else if (userGuessSix < answerSix) {
        userGuessSix = parseInt(prompt(`Sorry ${userName}, Wrong answer you have ${maxRetry - i} chances left! I'll give you a hint the answer is greater than ${userGuessSix}`));
      }
    } else {
      break;
    }
  }
  if (userGuessSix === answerSix) {
    alert(`That's right ${userName}! I am holding up ${answerSix} fingers right now.`);
    totalCorrect++;
  } else {
    alert(`You're out of attempts ${userName} and still haven't gotten the right answer. I'm holding up 7 fingers!`);
  }
  // console.log(totalCorrect);
}
guessingFingersGame();

function guessingFruit() {
  let answerSevenArr = ['bananas', 'grapes', 'pears', 'mangoes'];
  let maxRetry = 6;
  let isGuessCorrect = false;
  let userGuessSeven = prompt(`Alright ${userName} I'll throw you an easy one that has multiple correct answers. Can you name one of my favorite fruits?`).toLowerCase();
  for (let i = 0; i < maxRetry; i++) {
    for (let j = 0; j < answerSevenArr.length; j++) {
      if (userGuessSeven === answerSevenArr[j]) {
        isGuessCorrect = true;
        break;
      }
    }
    if (isGuessCorrect) {
      break;
    } else {
      userGuessSeven = prompt('Sorry Try again').toLowerCase();
    }
  }
  if (isGuessCorrect) {
    alert(`Yup that's it ${userName}, ${userGuessSeven} is one of the right answers!`);
    totalCorrect++;
  } else {
    alert(`Sorry ${userName} none of the answers you put in were correct. The answers were ${answerSevenArr}`);
  }
  alert(`That was fun ${userName}. Out of the 7 questions you got ${totalCorrect} right!`);
  console.log(totalCorrect);
}
guessingFruit();


// Old way of asking the first five Questions
// let answerOne = prompt(`Hey ${userName}, Question time do you think I like video games?`).toLowerCase();
// if (answerOne === 'y' || answerOne === 'yes') {
//   alert('You\'re right! I am currently playing Elden Ring!');
//   totalCorrect++;
//   // console.log(`${userName} is correct I like video games`);
// } else if (answerOne === 'n' || answerOne === 'no') {
//   alert('Nope, I\'ve been gaming since I could first hold a gameboy');
//   // console.log(`${userName} is wrong I do enjoy video games`);
// }

// let answerTwo = prompt('What about movies, do you think I love movies?').toLowerCase();
// if (answerTwo === 'y' || answerTwo === 'yes') {
//   alert('Right again I love watching movies especially in movie theaters');
//   totalCorrect++;
//   // console.log(`${userName} is right I do love movies`);
// } else if (answerTwo === 'n' || answerTwo === 'no') {
//   alert('Wrong, I love movies!');
//   // console.log(`${userName} is wrong I do love movies`);
// }

// let answerThree = prompt('I\'m a movie lover so does that mean I like movie theater food?').toLowerCase();
// if (answerThree === 'y' || answerThree === 'yes') {
//   alert('Nope buying theater food isn\'t for me at the prices they\'re pushing.');
//   // console.log(`${userName} was wrong I don't like paying for movie theater food`);
// } else if (answerThree === 'n' || answerThree === 'no') {
//   alert('You\'re right! I just try to bring my own snacks but don\'t tell anyone.');
//   totalCorrect++;
//   // console.log(`${userName} was right I don't like paying for movie theater food`);
// }

// let answerFour = prompt('When I am at home do you think my favorite streaming service is Netflix?').toLowerCase();
// if (answerFour === 'y' || answerFour === 'yes') {
//   alert('Yes! They\'ve got a little bit of everything on there.');
//   totalCorrect++;
//   // console.log(`${userName} was right I do like Netflix`);
// } else if (answerFour === 'n' || answerFour === 'no') {
//   alert('Sorry Netlix is my favorite!');
//   // console.log(`${userName} was wrong Netflix is my favorite streaming service`);
// }

// let answerFive = prompt('Do you think I can binge watch an entire series?').toLowerCase();
// if (answerFive === 'y' || answerFive === 'yes') {
//   alert(`Yea it's probably not the healthiest thing for my body but sometimes it just happens. Well that's all the questions I have ${userName} talk to you again soon!`);
//   totalCorrect++;
//   // console.log(`${userName} has binged watched a series before`);
// } else if (answerFive === 'n' || answerFive === 'no') {
//   alert(`You underestimate my power ${userName} series are no match for me! That's all my questions for now ${userName}! Talk to you again soon!`);
//   // console.log(`${userName} hasn't bing watched a series before`);
// }