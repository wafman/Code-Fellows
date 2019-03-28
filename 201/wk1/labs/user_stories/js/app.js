'use strict';

// gaining the user's name
var userName = prompt('What is your name?');

//setting questions array, for easy swapping out of questions
var places = [
  'oregon',
  'idaho',
  'california',
  'utah',
  'nevada',
  'wyomiong',
  'colorado',
  'texas',
  'georgia'
];
var questions = [
  'Do you know my name?',
  'Am I new to coding?',
  'Have I studied HTML before?',
  'Have I studied JavaScript before?',
  'Have we had lunch before?',
  'How old am I?',
  'What states have I visited?'
];

var correctAnswers = 0;

var answer = 30;

//establishing answer variables, changing to lowercase and establishing logic.

//question 1
function questionOne(){
  console.log('Question One function called');
  var answerOne = prompt(questions[0]);
  answerOne = answerOne.toLowerCase();
  if (answerOne === 'y' || answerOne === 'yes') {
    correctAnswers++;
    alert('Awseome ' + userName + ', I\'m glad we\'ve met.');
  } else if(answerOne === 'n' || answerOne === 'no'){
    alert('Unfortunately ' + userName + ', you dont know me well.');
  } else {
    alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
  }
  
  console.log(userName + ' answered question 1 (' + questions[0] + ') as ' + answerOne);
  return answerOne;

}


//question 2
function questionTwo(){
  var answerTwo = prompt(questions[1]);
  answerTwo = answerTwo.toLowerCase();
  if (answerTwo === 'y' || answerTwo === 'yes') {
    alert('Unfortunately ' + userName + ', I don\'t think we\'ve talked much yet.');
  } else if(answerTwo === 'n' || answerTwo === 'no'){
    correctAnswers++;
    alert('Correct ' + userName + ', we must have talked some already.');
  } else {
    alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
  }
  console.log(userName + ' answered question 2 (' + questions[1] + ') as ' + answerTwo);
  return answerTwo;
}

//question 3
function questionThree(){
  var answerThree = prompt(questions[2]);
  answerThree = answerThree.toLowerCase();
  if (answerThree === 'y' || answerThree === 'yes') {
    correctAnswers++;
    alert('Awseome ' + userName + ', I\'m glad we\'ve met.');
  } else if(answerThree === 'n' || answerThree === 'no'){
    alert('Unfortunately ' + userName + ', you dont know me well.');
  } else {
    alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
  }
  console.log(userName + ' answered question 3 (' + questions[2] + ') as ' + answerThree);
  return answerThree;
}

//question 4
function questionFour(){
  var answerFour = prompt(questions[3]);
  answerFour = answerFour.toLowerCase();
  if (answerFour === 'y' || answerFour === 'yes') {
    correctAnswers++;
    alert('Awseome ' + userName + ', you are correct.');
  } else if(answerFour === 'n' || answerFour === 'no'){
    alert('Unfortunately ' + userName + ', you dont know me well.');
  } else {
    alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
  }
  console.log(userName + ' answered question 4 (' + questions[3] + ') as ' + answerFour);
  return answerFour;
}

//question 5
function questionFive(){
  var answerFive = prompt(questions[4]);
  answerFive = answerFive.toLowerCase();
  if (answerFive === 'y' || answerFive === 'yes') {
    correctAnswers++;
    alert('Awseome ' + userName + ', well I hope it was deliciouis ');
  } else if(answerFive === 'n' || answerFive === 'no'){
    alert('Unfortunately ' + userName + ', that is something we will have to fix.');
  } else {
    alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
  }
  console.log(userName + ' answered question 5 (' + questions[4] + ') as ' + answerFive);
  return answerFive;
}
//test for for looping all questions
// var answers = [];
// var isCorrect;

// for( var i = 0; i < questions.length; i++){
//   answers[i] = prompt(questions[i]);
//   answers[i] = answers[i].toLowerCase();
//   if(answers[i] === 'y' || answers[i] === 'yes'){
//     alert(userName + ' your answer of ' + answers[i] + ' is ' + isCorrect)
//   }
// }

  //question 6
function questionSix(){
  var userAnswer;
  var limit = 4;
  var userGuesses = 0;
  var guessArrayq6 = [];
  
  while( userAnswer !== answer && userGuesses < limit) {
    userAnswer = prompt(questions[5]);
    console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
    if (userAnswer === null) {
      alert('must enter a number');
      userGuesses++;
      console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
    } else if (userAnswer < answer){
      console.log('too low');
      userGuesses++;
      alert(userAnswer + ' is too low. That was guess ' + userGuesses + ' out of 4');
      console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
    } else if ( userAnswer > answer){
      console.log('too high');
      userGuesses++;
      alert(userAnswer + ' is too high. That was guess ' + userGuesses + ' out of 4.');
      console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
    } else {
      console.log('correct answer');
      alert('You guessed correct');
      correctAnswers++;
      userGuesses++;
      console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
      guessArrayq6.push(userAnswer);
      break;
    }
    guessArrayq6.push(userAnswer);
    return userAnswer;
  }
}

//question 7
function questionSeven(){
  var questSevenLimit = 6;
  var userQsevenAnswer;
  var userGuess = 0;
  var continueGame = true;
  var guessArrayq7 = [];
  while(userGuess < questSevenLimit){
    userQsevenAnswer = prompt(questions[6]);
    for(var s = 0; s < places.length; s++){
      if(userQsevenAnswer === places[s]){
        correctAnswers++;
        console.log('correct answer');
        alert('correct!');
        continueGame = false;
        break;
      } else {
        continue;
      }
    }
    guessArrayq7.push(userQsevenAnswer);
    if(continueGame === false){
      userGuess++;
      console.log('correct answer, break while loop');
      break;
    } else {
      userGuess++;
      console.log('wrong answer' + userGuess + ' of 6 guesses');
      alert('your guess of ' + userQsevenAnswer + ' is wrong. You have used ' + userGuess + ' of 6 guesses.');
      continue;
    }
  }
  return userQsevenAnswer;
}

function writePage(){
  document.getElementById('greeting').innerHTML = 'Welcome ' + userName + ', let\'s see how well you know me...';

  document.getElementById('q1').innerHTML = questions[0];
  document.getElementById('a1').innerHTML = 'Your answer: ' + questionOne();

  document.getElementById('q2').innerHTML = questions[1];
  document.getElementById('a2').innerHTML = 'Your answer: ' + questionTwo();

  document.getElementById('q3').innerHTML = questions[2];
  document.getElementById('a3').innerHTML = 'Your answer: ' + questionThree();

  document.getElementById('q4').innerHTML = questions[3];
  document.getElementById('a4').innerHTML = 'Your answer: ' + questionFour();

  document.getElementById('q5').innerHTML = questions[4];
  document.getElementById('a5').innerHTML = 'Your answer: ' + questionFive();

  document.getElementById('q6').innerHTML = questions[5];
  document.getElementById('g6').innerHTML = 'Your answers: ' + questionSix();
  document.getElementById('a6').innerHTML = 'correct answer: ' + answer;

  document.getElementById('q7').innerHTML = questions[6];
  document.getElementById('g7').innerHTML = 'Your answers: ' + questionSeven();
  document.getElementById('a7').innerHTML = 'correct possible answers: ' + places;

  document.getElementById('score').innerHTML = userName + ', you\'ve finished the quiz and gotten ' + correctAnswers + ' out of 7 questions correct';

}

//Function calls
//Display the user's answer to the questions
writePage();

