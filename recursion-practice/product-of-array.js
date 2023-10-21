// more recursion practice
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// more recursion practice
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    // if the arr length is 1
    // if arr length is zero

    // if (arr.length === 0) return 1
    if (arr.length === 1) return arr[0]
    console.log(arr)
    return arr[0] * productOfArray(arr.slice(1)) // a copy is being made i don't understand how a copy of an arr is being made - it's being copied that's the nature of the slice method if I slice the arr at index a copy of that arr is made and then used to call the function again
}

console.log(
    // productOfArray([1,2,3]), // 6
productOfArray([1,2,3,10]) // 60
)