// Given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    return text.toLowerCase().split('').filter(e => alpha.includes(e)).map(e => alpha.indexOf(e)+ 1).join(' ')
}



// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    let distanceFromOrigin = [0, 0]
    let distance = {
      "n": 1,
      "s": -1,
      "w": 1,
      "e": -1,
    }
    walk.forEach(e => {
        e === "n" || e === "s" ? distanceFromOrigin[0] += distance[e] : distanceFromOrigin[1] += distance[e]
        console.log(distanceFromOrigin)
        return distanceFromOrigin
    })
    
    return distanceFromOrigin.filter(e => e === 0).length === 2 && walk.length === 10
}

function isValidWalk(walk) {
    let count = (arr, val) => arr.reduce((sum, e) => sum + (e === val ? 1 : 0), 0)
    return walk.length === 10 && count(walk, 'n') === count(walk, 's') && count(walk, 'w') === count(walk, 'e')
  }



//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let count = 0
    while (num > 9){
      count++
      num = `${num}`.split('').reduce((prod, e) => prod * +e, 1)
    }
    return count
}

function persistence(num) {
    return `${num}`.length > 1 
        ? 1 + persistence(`${num}`.split('').reduce((prod, e) => prod * +e, 1))
        : 0
}


//Count the number of divisors of a positive integer n.

function getDivisorsCnt(n){
    let count = 0
    for (let i = 1; i < Math.sqrt(n); i++){
      if(n % i === 0){
        count += 2
      }
    }
    
    if (Math.sqrt(n) % 1 === 0){
      count++
    }
    
    return count
}



//Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'

function divisors(integer) {
    let arr = []
    for (let i = 2; i < integer; i++){
      integer % i === 0 ? arr.push(i) : arr
    }
    
    return arr.length ? arr : `${integer} is prime`
}


function divisors(integer) {
    let arr = []
    let sqrt = Math.sqrt(integer)
    
    for (let i = 2; i < sqrt; i++){
      if (integer % i === 0){
        arr.push(i, integer / i)
      }
    }
    
    if (sqrt % 1 === 0 && sqrt !== 1){
      arr.push(sqrt)
    }
    
    return arr.length ? arr.sort((a, b) => a - b) : `${integer} is prime`
  }