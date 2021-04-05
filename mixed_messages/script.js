
let inspirational_quotes = ['The true sign of intelligence is not knowledge but imagination --> Albert Einstein',
"Never one to waste words. --> Santino D'Antonio",
 "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. --> Jimmy Dean", 
"Somewhere, something incredible is waiting to be known. --> Carl Segan", 
"Common Sense is that which judges the things given to it by other senses. --> Leonardo Da Vinci", 
"The first principle is that you must not fool yourself – and you are the easiest person to fool. --> Richard Feynman", 
"A man who dares to waste one hour of time has not discovered the value of life. --> Charles Darwin"]


let randomNumberGenerator = inspirational_quotes => {
let randomNumber = Math.floor(Math.random() * inspirational_quotes.length);
return randomNumber;
}

let randomQuoteNumber = randomNumberGenerator(inspirational_quotes);
console.log(inspirational_quotes[randomQuoteNumber]);