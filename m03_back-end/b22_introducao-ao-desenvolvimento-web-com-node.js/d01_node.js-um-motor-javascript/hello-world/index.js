const { question, questionInt} = require('readline-sync');

const name = question('What\'s your name?');
const age = questionInt('How old are you?')

console.log(`Hello, ${name}! You are ${age} years old!`);