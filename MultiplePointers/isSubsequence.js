// Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing
// it assumes that the first string will be shorter or equal to the second string 

function isSubsequence(str1, str2) {
    let i = 0 
    let j = 0 

    // why this line of code doing?
    // if (!str1) {
    //     return true
    // }

    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++
        }
        if (i === str1.length) { 
            return true
        }
        j++
    }

    return false
    
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('hello world', 'hello'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))

// Solution 2

function isSubsequence2(str1, str2) {
    let count = 0;
    for (let c of str2) {
      if (str1[count] === c) {
        count++;
      }
    }
    return (str1.length === count);
  }