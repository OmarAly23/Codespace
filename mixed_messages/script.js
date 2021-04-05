
let inspirational_quotes = ['The true sign of intelligence is not knowledge but imagination --> Albert Einstein',
"Never one to waste words. --> Santino D'Antonio",
 "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. --> Jimmy Dean"];


let randomNumberGenerator = inspirational_quotes => {
let randomNumber = Math.floor(Math.random() * inspirational_quotes.length);
return randomNumber;
}

let randomQuoteNumber = randomNumberGenerator(inspirational_quotes);
console.log(inspirational_quotes[randomQuoteNumber]);