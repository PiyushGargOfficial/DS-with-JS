//Using the concepts of Stacks

//Stack
var letters = [];

var word = "racecar";

var rword = "";

//Filling the letters in the stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//Reversing the word using the stack
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

//Define the rword or it is going to say undefined
// console.log(rword);

//Checking Palindrome
if (rword === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
