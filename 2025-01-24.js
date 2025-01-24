//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
//Rules for a smiling face:
//      Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//      A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//      Every smiling face must have a smiling mouth that should be marked with either ) or D
//      No additional characters are allowed except for those mentioned.
// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
//P: arr of smiley faces
//R: number of valid smileys in the array
//E: countSmileys([':)', ';(', ';}', ':-D']) >> should return 2;

function countSmileys(arr) {
    //outline the valid charaters, could have also outlined each possible smiley face
    let validChar = {
      'eyes': [':', ';'],
      'nose': ['-', '~'],
      'mouth': [')','D'],
    }
    
    //create new array that holds only the valid smiley faces
    let valid = arr.filter(e => {
      if (e.length === 2){
        return validChar['eyes'].includes(e[0]) && validChar['mouth'].includes(e[1])
      }else if (e.length === 3){
        return validChar['eyes'].includes(e[0]) && validChar['nose'].includes(e[1]) && validChar['mouth'].includes(e[2])
      }
    })

    //return the length of the array w the valid smiley faces
    return valid.length
}


//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array. You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
//P: array of consecutive increasing letters, at least two letters, will only be in one case
//R: return the letter that is missing from the array
//E: ['a','b','c','d','f'] >> 'e', ['O','Q','R','S'] >> 'P'

function findMissingLetter(array){
    //outline all the letter in alphabet in an array (could have included uppercase letters here to remove the need for the conditional below)
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split(''),
    //find the index of the first letter in array
        firstIndex = alpha.indexOf(array[0].toLowerCase()),
    //create the array with all of the letters included
        correct = alpha.slice(firstIndex, firstIndex + array.length + 1),
    //determine missing letter by comparing the arrays
        missing = correct.find(e => !array.map(e => e.toLowerCase()).includes(e))
    
    //check whether inital array was upper case and return letter in that case
    return array[0] === array[0].toLowerCase() ? missing : missing.toUpperCase()
}

