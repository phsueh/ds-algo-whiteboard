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

// console.log(areThereDuplicates1(1, 2, 3))
// console.log(areThereDuplicates1(1, 2, 2))
// console.log(areThereDuplicates1('a', 'b', 'c', 'a'))

// Solution 2 

function areThereDuplicates2(...args) {
  args.sort((a,b) => a > b)
  let start = 0 
  let next = 1

  while (next < args.length){
    if (args[start] === args[next]){
      return true
    }
    start ++
    next ++
  }

  return false
}

// console.log(areThereDuplicates2(1, 2, 3))

// Solution 3 - one linear solution

function areThereDuplicates3(){ 
  return new Set(arguments).size !== arguments.length
}

console.log(areThereDuplicates3(1, 2, 3, 3))

// lessons learned 
  // for-in is better for looping through objects
  // Set in JS will only store unqiue values - there are also alot of interesting functionalities https://www.youtube.com/watch?v=nGOnfYNo8F4
  // return new Set(arguments).size !== arguments.length returns a bolean value 