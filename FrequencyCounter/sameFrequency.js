// Given two positive integers, find out if the two unumbers have the same frequency of digits. 

// solution must have the following complixities: 
    // TIME: O(N)

function sameFrequency(int1, int2){
    // convert int1 and int2 to strings
    // create 2 dictionary object to keep track of int1 and int2 values
    // loop over strings assign values into the 2 dictionaries
    // loop over one dictionary object and compare to the other
        // if values do not equal return false
        // if values do equal return true

    let stringInt1 = int1.toString()
    let stringInt2 = int2.toString()

    if (stringInt1.length !== stringInt2.length) {
        return false
    }

    let countInt1 = {}
    let countInt2 = {}

    for (let i in stringInt1) {
        countInt1[stringInt1[i]] ? countInt1[stringInt1[i]] += 1 : countInt1[stringInt1[i]] = 1
    }

    for (let i in stringInt2) {
        countInt2[stringInt2[i]] ? countInt2[stringInt2[i]] += 1 : countInt2[stringInt2[i]] = 1
    }

    for (let i in countInt1) {

        if (countInt1[i] !== countInt2[i]){
            console.log(countInt1, countInt2)
            return false
        }
    }
    console.log(countInt1, countInt2)

    return true
}

console.log(sameFrequency(182,281)) // false
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578,5879385)) // true
console.log(sameFrequency(22,222)) // false

// lessons learned
    // I cannot do a .length on an int
    // how do assign key values from looping over a string
