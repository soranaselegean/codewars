// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let obj = {}
    
    text.toLowerCase().split('').forEach(e => {
      obj[e] ? obj[e]++ : obj[e] = 1
      return obj
    })
    
    return Object.keys(obj).filter(e => obj[e] > 1).length
  }



// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    return n.toString(2).split('').reduce((sum, e) => sum + +e, 0)
  };



//Digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.


function digitalRoot(n) {
    if (n < 10){
      return n
    }
    
    return digitalRoot(n.toString().split('').reduce((sum, e) => sum + +e, 0))
  }



//Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
    return string.split(" ").map(e => e.length > 4 ? e.split('').reverse().join('') : e).join(' ')
  }