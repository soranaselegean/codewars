//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.
//P: string
//R: object with each letter as a property and the count in the string as its value, an empty string returns and empty object
//E: aba >> {'a': 2, 'b': 1}, '' >> {}

function count(string) {
    return string.split('').reduce((obj, e) => { 
      obj[e] ? obj[e]++ : obj[e] = 1
      return obj
    }, {})
}