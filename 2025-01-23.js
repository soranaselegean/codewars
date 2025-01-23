//Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//P: A string with multiple words, 
//R: Return the word with the highest score as a string. If two words score the same, return the word that appears earliest in the original string.
//E: For example, the score of abad is 8 (1 + 2 + 1 + 4).
//P: object assigning each letter to a number, map based on that >> don't need an object

function high(x){
    let valueMap = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((obj, e, i) => {
        obj[e] = i + 1
        return obj
    },{})
    
    x = x.split(' ')
    let score = x.map(word => word.split('').reduce((sum, letter) => sum + +valueMap[letter], 0))
    
    return x[score.findIndex(e => e === Math.max(...score))]
}

function high(x){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    
    x = x.split(' ')
    let score = x.map(word => [...word].reduce((sum, letter) => sum + alpha.indexOf(letter) + 1, 0))
    
    return x[score.findIndex(e => e === Math.max(...score))]
}