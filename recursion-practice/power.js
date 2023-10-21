// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// - I keep thinking I need another way to keep track of the decrease in decimal, I still don't really get it
// ○ The 'exponent' parameter is the part that's tripping me up
// ○ how did the 'exponent' keep reducing down to zero? what is keeping track of the exponent value from one function call to the next?
// Because I called it with a lesser value then the previous and the value is decreased again with each function call

// step 1 rephrase:  use recursion and write a power function
// step 2 edge cases, examples, inputs, outputs: no negative bases and exponents, check if values are integers, inputs 2 integers, outputs 1 integer
// step 3 sudo: 
    // base case should be less than the power so I need to decrement it somehow
    // multiple base times base until the base reaches a certain value
    // need an if statement 
    // declare exp variable 
        // assign exponent value to variable
    // declare if statement 
        // multiple base times base
    // return result

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2,1))