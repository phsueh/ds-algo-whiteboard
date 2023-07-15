// ########## NUMBER OF A ATTEMPTS 10

  
// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

    function isValidAnagram(str1, str2){

      // check if number chars in string equal
      if (str1.length != str2.length){
        console.log(false)
        return false
      }

      // create empty object to compare values
      obj1 = {}
      obj2 = {}
      for (let i = 0; i < str1.length; i++){
        if (obj1[str1[i]] > 0) { 
          obj1[str1[i]]++
        } else {
          obj1[str1[i]] = 1
        }
      }

      for (let i = 0; i < str2.length; i++){
        if (obj2[str2[i]] > 0) { 
          obj2[str2[i]]++
        } else {
          obj2[str2[i]] = 1
        }
      }

      for (let key in obj1) {
        if (!(key in obj2)){ // how do I check the key obj2?
          console.log(false)
          return false
        }
        if (obj1[key] != obj2[key]) {
          console.log(false)
          return false
        } 
      }

      console.log(true)
      return true
      
      

      // Do I need a secound object?
        // how else will I track the frequency?

      // for(let val of str1) {
      //   obj2[val] = (obj2[val] || 0) + 1 // this is quick of assigning zero or incrementing it. But how does it assign zero to it...this expression is not assigning zero. The or operator is evaluating an expression. So I need to test if there was an existing object what would the result
      //   console.log(obj)
      // }

      // If i create another object for str2 how do i compare them? - this isn't necessary, but double check why it was the solution earlier

      // create another and loop over with one of the strings

    }
  
  isValidAnagram("aaz", "zza");

  isValidAnagram("listen", "silent")
  isValidAnagram("debitcard", "badcredit")
  isValidAnagram("astronomer", "moonstarer")
  isValidAnagram("schoolmaster", "theclassroom")
  isValidAnagram("conversation", "voicesranton")

  isValidAnagram("hello", "world")
  isValidAnagram("cat", "dog")
  isValidAnagram("apple", "banana")
  isValidAnagram("green", "yellow")
  isValidAnagram("happy", "sad")

  // learning
    // 'obj1[str1[i]]' - declaring this "automatically" creates the key for the object 
    // when it comes to true and false is it easier to check for false things