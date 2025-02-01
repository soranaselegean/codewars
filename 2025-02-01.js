//You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//P: array of strings and integer
//R: string of first longest concatenation of k elements in array
//E: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

function longestConsec(strarr, k) {
    //account for numbers less than one or greater than length of array
    if (k < 1 || k > strarr.length){
        return ''
    }

    //grab the length of each consecutive concatenation, for loop
    let lengths = []
    for (let i = 0; i < strarr.length; i++){
        let concat = strarr.slice(i, i + k).join('')
        lengths.push(concat.length)
    }

    //identify longest
    let startIndex = lengths.indexOf(Math.max(...lengths))

    //return the concatnated string
    return strarr.slice(startIndex, startIndex + k).join('')
}