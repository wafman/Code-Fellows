'use strict';

// gaining the user's name
var userName = prompt('What is your name?');

//setting questions array, for easy swapping out of questions
var questions = ['Do you know my name?', 'Am I new to coding?', 'Have I studied HTML before?', 'Have I studied JavaScript before?', 'Have we had lunch before?']

//establishing answer variables, changing to lowercase and establishing logic.

//question 1
var answerOne = prompt(questions[0]);
answerOne = answerOne.toLowerCase();
if (answerOne === 'y' || answerOne === 'yes') {
  alert('Awseome ' + userName + ', I\'m glad we\'ve met.');
} else if(answerOne === 'n' || answerOne === 'no'){
  alert('Unfortunately ' + userName + ', you dont know me well.');
} else {
  alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
}
console.log(userName + ' answered question 1 (' + questions[0] + ') as ' + answerOne);

//question 2
var answerTwo = prompt(questions[1]);
answerTwo = answerTwo.toLowerCase();
if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('Unfortunately ' + userName + ', I don\'t think we\'ve talked much yet.');
} else if(answerTwo === 'n' || answerTwo === 'no'){
  alert('Correct ' + userName + ', we must have talked some already.'); 
} else {
  alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
}
console.log(userName + ' answered question 2 (' + questions[1] + ') as ' + answerTwo);

//question 3
var answerThree = prompt(questions[2]);
answerThree = answerThree.toLowerCase();
if (answerThree === 'y' || answerThree === 'yes') {
  alert('Awseome ' + userName + ', I\'m glad we\'ve met.');
} else if(answerThree === 'n' || answerThree === 'no'){
  alert('Unfortunately ' + userName + ', you dont know me well.');
} else {
  alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
}
console.log(userName + ' answered question 3 (' + questions[2] + ') as ' + answerThree);

//question 4
var answerFour = prompt(questions[3]);
answerFour = answerFour.toLowerCase();
if (answerFour === 'y' || answerFour === 'yes') {
  alert('Awseome ' + userName + ', you are correct.');
} else if(answerFour === 'n' || answerFour === 'no'){
  alert('Unfortunately ' + userName + ', you dont know me well.');
} else {
  alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
}
console.log(userName + ' answered question 4 (' + questions[3] + ') as ' + answerFour);

//question 5
var answerFive = prompt(questions[4]);
answerFive = answerFive.toLowerCase();
if (answerFive === 'y' || answerFive === 'yes') {
  alert('Awseome ' + userName + ', well I hope it was deliciouis ');
} else if(answerFive === 'n' || answerFive === 'no'){
  alert('Unfortunately ' + userName + ', that is something we will have to fix.');
} else {
  alert('These are yes or no questions. Your options are yes/YES/y/Y or no/NO/n/N. ');
}
console.log(userName + ' answered question 5 (' + questions[4] + ') as ' + answerFive);


//All DOM Manipulation
document.getElementById('greeting').innerHTML = 'Welcome, ' + userName + ', let\'s see how well you know me...';

document.getElementById('q1').innerHTML = questions[0]
document.getElementById('a1').innerHTML = answerOne

document.getElementById('q2').innerHTML = questions[1]
document.getElementById('a2').innerHTML = answerTwo

document.getElementById('q3').innerHTML = questions[2]
document.getElementById('a3').innerHTML = answerThree

document.getElementById('q4').innerHTML = questions[3]
document.getElementById('a4').innerHTML = answerFour

document.getElementById('q5').innerHTML = questions[4]
document.getElementById('a5').innerHTML = answerFive