// given two strings, write a function to determine if the strings have the same number of characters
// this is the frequency counter 


function validAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false
    }

    let anagramCompare1 = {}
    let anagramCompare2 = {}

    // loop over str1 and create key value pair of how many char: frequency
    for(let char of str1){
        // so the below is saying i.e. does 1 = 1 if not set it to 0
        anagramCompare1[char] = (anagramCompare1[char] || 0) + 1
    }

    // loop over str2 and create key value pair of how many char: frequency
    for (let char of str2){
        anagramCompare2[char] = (anagramCompare2[char] || 0) + 1
    }

    for (let char in anagramCompare1){
        if(anagramCompare1[char] !== anagramCompare2[char]){
            return false
        }
    }

    return true

    // console.log(anagramCompare1)
    // console.log(anagramCompare2)

}

console.log(validAnagram('anagrams', 'nagaramm'))