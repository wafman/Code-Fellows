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

//establishing acceptable yes answers to questions
var answerYes = [
  'yes',
  'y',
  'yeah',
  'yup'
];

//establishing acceptable no answers to questions
var answerNo = [
  'no',
  'n',
  'nope',
  'nah'
];

var correctAnswers = 0;

var age = 30;

// working on bug of this function for first 5 questions using for loops
//establishing answer variables, changing to lowercase and establishing logic.
// function fiveQuestions() {
//   for(var i = 0; i < questions.length; i++){
//     console.log('question' + i + ' called');
//     var functionAnswer = prompt(questions[i]);
//     functionAnswer = functionAnswer.toLocaleLowerCase();
//     //conditional check for acceptable answer
//     //if check for questions 2
//     if(i === questions[1]){
//       //y stands for yes
//       for(var y = 0; y < answerYes.length; y++){
//         if(functionAnswer === answerYes[y]){
//           alert('Unfortunately' + userName + ', it looks like we have gotten to know each other yet.');
//         }
//       }
//       //n stands for no
//       for(var n = 0; n < answerNo.length; n++){
//         if(functionAnswer == answerNo[n]){
//           alert('Correct!' + userName + ', excellent job thus far.');
//           correctAnswers++;
//         }
//       }
//     }
//     //c stands for correct
//     for(var c = 0; c < answerYes.length; c++){
//       if(functionAnswer === answerYes[y]){
//         alert('Correct!' + userName + ', excellent job thus far.');
//         correctAnswers++;
//       }
//     }
//     //w stands for wrong
//     for(var w = 0; w < answerNo.length; n++){
//       if(functionAnswer === answerNo[n]){
//         alert('Unfortunately' + userName + ', it looks like we have gotten to know each other yet.');
//       }
//     }
//     console.log('end of for loop question game check');
//   }//end of for loop
//   return functionAnswer;
// }//end of function fiveQuestions

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

//question 6
function questionSix(){
  var userAnswer;
  var limit = 4;
  var userGuesses = 0;
  var guessArrayq6 = [];

  //issue where a null answer is correct. try to add a check for type to insure numeric answer.
  while( userAnswer !== age && userGuesses < limit) {
    userAnswer = prompt(questions[5]);
    console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
    if (userAnswer < age){
      console.log('too low');
      userGuesses++;
      alert(userAnswer + ' is too low. That was guess ' + userGuesses + ' out of 4');
      console.log(userAnswer + ' = user answer | ' + userGuesses + ' = user Guess');
    } else if ( userAnswer > age){
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
    }
    guessArrayq6.push(userAnswer);
  }
  return guessArrayq6;
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
  return guessArrayq7;
}

function writePage(){
  //below is potential use for potential for loop function at top covering first 5 questions
  // document.getElementById('button').onclick = fiveQuestions();

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
  document.getElementById('a6').innerHTML = 'correct answer: ' + age;

  document.getElementById('q7').innerHTML = questions[6];
  document.getElementById('g7').innerHTML = 'Your answers: ' + questionSeven();
  document.getElementById('a7').innerHTML = 'correct possible answers: ' + places;

  document.getElementById('score').innerHTML = userName + ', you\'ve finished the quiz and gotten ' + correctAnswers + ' out of 7 questions correct';
}



//Function calls
//Display the user's answer to the questions

writePage();
