// Implement a function which accepts a variable number of arguments, and checks whether there are any duplicagtes amount the arguments passed in

// Restrictions: Time - O(n), Space - O(n)
// Bonus: Time - O(n log n), Space - O(1)

// Solution 1

function areThereDuplicates1(arg) {
    let lookup = {}

    for (let i = 0; i <= arg.length; i++) {
        lookup[arg[i]] ? lookup[arg[i]] += 1 : lookup[arg[i]] = 1
    }

    for (let key in lookup) {

    }

    console.log(lookup)



  }

console.log(areThereDuplicates1(1, 2, 3))

// Solution 2


// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))

// lessons learned 
  // for-in is better for looping through objects
