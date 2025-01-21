//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). 

function order(words){
    words = words.split(' ')
    let ordered = []
    for (let i = 1; i <= words.length; i++){
      ordered.push(words.find(e => e.includes(i)))
    }
    return ordered.join(' ')
}


//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    str = str.split('')
    let solution = []
    
    if (str.length % 2 !== 0){
      str.push('_')
    }
    
    str.forEach((e, i, arr) => i % 2 === 0 ? solution : solution.push(arr[i-1] + e))
    
    return solution
}

function solution(str){
    let solution = []
    
    if (str.length % 2 !== 0){
      str = str + '_'
    }
    
    for (let i = 0; i < str.length; i += 2){
      solution.push(str[i] + str[i + 1])
    }
    
    return solution
}


//Well met with Fibonacci bigger brother, AKA Tribonacci. As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next.
//So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence: [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get: [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence. Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature,n){
    let arr = []
    
    if (n < signature.length){
      for (let i = 0; i < n; i++){
        arr.push(signature[i])
      }
    }else{
      arr = signature
      while (arr.length < n){
        arr.push(arr.slice(-3).reduce((sum, e) => sum + e, 0))
      }
    }
    
    return arr
}


function tribonacci(signature,n){
    let arr = signature.slice(0, n)
    
    while (arr.length < n){
      arr.push(arr.slice(-3).reduce((sum, e) => sum + e, 0))
    }
    
    return arr
}


//There is an array with some numbers. All numbers are equal except for one. Try to find it! It’s guaranteed that array contains at least 3 numbers.
//P: array with at least 3 numbers
//R: the number which is different from the others
//E: finUniq([1, 1, 2]) => 2
//P: use indexOf, lastIndexOf

function findUniq(arr) {
  return arr.find(e => arr.indexOf(e) === arr.lastIndexOf(e))
}

// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n. If it is the case we will return k, if not return -1.
//P: only positive integers
//R: return a number or -1
//E: 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2; 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
//P: calculate the sum raised to the power by converting to an array and using reduce, check whether that sum / n is an integer and if yes return that number

function digPow(n, p){
  let sum = n.toString().split('').reduce((sum, e, i) => sum + e**(p + i), 0)
  return sum % n === 0 ? sum / n : -1
}

//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
//P: array of positive and negative integers
//R: index or -1
//E: findEvenIndex([1, 2, 3, 4, 1, 1, 4]) => 3
//P: use findIndex

function findEvenIndex(arr){
  return arr.findIndex((e, i) => arr.slice(0, i).reduce((sum, e) => sum + e, 0) === arr.slice(i + 1).reduce((sum, e) => sum + e, 0))
}