//You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

function wave(str){
    let arr = []
    str.split('').forEach((e, i) => e === ' ' ? e : arr.push(str.slice(0, i) + e.toUpperCase() + str.slice(i+1)))
    return arr
}