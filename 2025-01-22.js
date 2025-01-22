//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
//P: array of numbers, should be same length, could be null
//R: true if every element in b is an element in a square, null arrays are false
//E: a = [121, 144, 19, 161, 19, 144, 19, 11] , b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] ==> true
//P: check whether every element in a squared is contained in b, make sure they are the same length, and that null inputs arrays return false > need to consider what happens if the square is in there but not the right number of times, sort both functions

// function comp(array1, array2){
//     if (array1.length === 0 || array2.length === 0 || array1.length !== array2.length){
//         return false
//     }

//     return array1.every(e => array2.includes(e**2))
// }

function comp(array1, array2){
    if (array1 === null || array2 === null || array1.length !== array2.length){
      return false
    }
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    
    for (let i = 0; i < array1.length; i++){
      if (array1[i]**2 !== array2[i]){
        return false
      }
    }
    
    return true
}

function comp(array1, array2){
    if (array1 === null || array2 === null){
      return false
    }
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    return array1.every((e, i) => e**2 === array2[i])
}


//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//P: positive integer
//R: an array with * based on number of floors provided
//E: 3 == >
//   [
//     "  *  ",
//     " *** ", 
//     "*****"
//   ]
//P: rule is n*2 - 1

function towerBuilder(nFloors) {
    let arr = []
    let lengthFloor = nFloors*2 - 1
    
    for (let i = 1; i <= nFloors; i++){
      let floor = '*'.repeat(i*2 - 1)
      floor = floor.padStart((lengthFloor + floor.length)/2)
      floor = floor.padEnd(lengthFloor)
      arr.push(floor)
    }
    
    return arr
}