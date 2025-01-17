//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str){
    str = str.replaceAll('_','-')
    return str.split('-').map((e, i) => i > 0 ? e[0].toUpperCase() + e.slice(1) : e).join('')
}


//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

let uniqueInOrder = (iterable) => {
    // typeof iterable === 'string' ? iterable = iterable.split('') : iterable
    return [...iterable].filter((e, i , arr) => e !== arr[i - 1])
}

function uniqueInOrder(iterable){
    let arr = []
    for (let i = 0; i < iterable.length; i++){
      if(arr[arr.length - 1] !== iterable[i]){
        arr.push(iterable[i])
      }
    }
    return arr
}


//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').every(e => string.toLowerCase().includes(e))
  }