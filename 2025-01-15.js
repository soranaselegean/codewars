// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    return word.toLowerCase().split('').map((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e) ? '(' : ')').join('')
}


//You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers){
    let oddOrEven = integers.map(e => Math.abs(e % 2)).filter((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e))[0]
    return integers.filter(e => Math.abs(e % 2) === oddOrEven)[0]
}

function findOutlier(integers){
    return integers.filter(e => e % 2 === 0).length > 1 ? integers.filter(e => e % 2 !== 0)[0] : integers.filter(e => e % 2 === 0)[0]
}

function findOutlier(integers){
    let even = integers.filter(e => e % 2 === 0)
    return even.length > 1 ? integers.filter(e => e % 2 !== 0)[0] : even[0]
}
