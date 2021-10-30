// given two strings, write a function to determine if the strings have the same number of characters

function validAnagram(str1, str2) {
    if(str1.length != str2.length) {
        return false
    }

    let anagramCompare1 = {}
    let anagramCompare2 = {}

    // 
    for(let char in str1){
        anagramCompare1[char] = (anagramCompare1[char] || 0) + 1
        console.log(anagramCompare1)
    }

    return true

}

console.log(validAnagram("rat", "car"))