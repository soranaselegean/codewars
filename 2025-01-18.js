//A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10). Return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
//For example, take 153 (3 digits), which is narcissistic: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

function narcissistic(value) {
    let arr = value.toString().split('')
    return value === arr.reduce((sum, e) => sum + e**arr.length, 0)
}