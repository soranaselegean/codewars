//You will be given a number and you will need to return it as a string in Expanded Form.
//12 --> "10 + 2", 45 --> "40 + 5", 70304 --> "70000 + 300 + 4"

function expandedForm(num) {
    return num
              .toString()
              .split('')
              .reverse()
              .map((e, i) => e + '0'.repeat(i))
              .filter(e => +e !== 0)
              .reverse()
              .join(' + ')

}