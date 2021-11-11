// Implement a function which accepts a variable number of arguments, and checks whether there are any duplicagtes amount the arguments passed in

// Restrictions: Time - O(n), Space - O(n)
// Bonus: Time - O(n log n), Space - O(1)

// Solution 1

function areThereDuplicates1() {
    let lookup = {}

    for (let i in arguments) {
      lookup[arguments[i]] ? lookup[arguments[i]] += 1 : lookup[arguments[i]] = 1
    }


    for (let key in lookup) {
      if (lookup[key] > 1) return true
    }

    return false
  }

console.log(areThereDuplicates1(1, 2, 3))
console.log(areThereDuplicates1(1, 2, 2))
console.log(areThereDuplicates1('a', 'b', 'c', 'a'))

// Solution 2 - come back to this solution




// lessons learned 
  // for-in is better for looping through objects
