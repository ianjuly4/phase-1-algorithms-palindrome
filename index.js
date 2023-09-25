function reversed(word){
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord
}

function isPalindrome(word) {
  const reversedWord = reversed(word)
  if (word === reversedWord){
    return true;
  }else{
    return false;
  }
} 

/* 
you can reverse an array with .reverse
you can split an array with .split
you can join an array into a string with .join  
Add your pseudocode here
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
