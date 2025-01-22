//Complete the solution so that the function will break up camel casing, using a space between words.
//P: a string in camel case, an empty string
//R: a string with a space before the capital letter, empty string
//E: "camelCasing"  =>  "camel Casing"
//P: identify the letter that is capitalized and add a space before it

function solution(string) {
    return string.split('').map(e => e === e.toUpperCase() ? ' ' + e : e).join('')
}
// I initally had a list of all the letters in uppercase and compared to that


//Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime. Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//P: integer, positive negative or zero
//R: true if prime, otherwise false. negative numbers will always be not prime
//E: 13 --> true, 2 --> true, 4 --> false
//P: find the number of divisors that are not 1 or number, if greater than zero then its not prime

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++){
      if (num % i === 0){
        return false
      }
    }

    return num > 1
}


//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
//P: array of integers, both even and odd
//R: an array with the odd integers ordered but evens in their original spot
//E: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//P: filter out the odd numbers and sort them, create a new array with the odd numbers replaced with a symbol to hold their place, reintroduce the sorted odd array into those slots >> don't need to have the placeholders, only need to change the odds in the array with the order of odds

function sortArray(array) {
    let odds = array.filter(e => e % 2 !== 0).sort((a, b) => a - b)
    return array.map(e => e % 2 !== 0 ? odds.shift() : e)
}