// Import the encryptors functions here.
const encryptors = require('./encryptors.js');
const {caesarCipher, symbolCipher, reverseCipher} = encryptors;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const temp = caesarCipher(str, 15);
  const strTemp = symbolCipher(temp);
  return reverseCipher(strTemp);
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const temp = reverseCipher(str);
  const strTemp = symbolCipher(temp);
  return caesarCipher(strTemp, -15);
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);