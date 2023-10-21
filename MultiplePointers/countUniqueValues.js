// ########## NUMBER OF A ATTEMPTS 9

// write function that returns the number of unique values in a sorted array


// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// console.log(
//     countUniqueValues([1,1,1,1,1,2]), // 2
//     countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]), // 7
//     countUniqueValues([]), // 0
//     countUniqueValues([-2,-1,-1,0,1]) // 4
// )
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

function countUniqueValues(arr){

    let result = 0

    if (arr.length === 0) {
        result = 0
    }

    if (arr.length === 1) {
        result = 1
    }
    
    let i = 0

    // how many times to loop? Do I want it loop 9 times or eight times, loop by number of indexes or length. confusion if i want j to start at the first index what do i want it loop the lenght of the arr
    // how does i move does i need to move? i technically isn't moving it's just being assigned a new value i++ DUH!
    // getting confused of determine the index versus the value at the index
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++ // why is it when I switch up the order it produces a different result? - move the pointer up 1 AND THEN assign the new value
            arr[i] = arr[j]
            
        }
        result = i + 1
    }

    
    

    // the result is going to arr[j] - NO this is completely wrong!
 
    console.log(result)
    
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
countUniqueValues([1]) // 1

// count unique values in an array 
// end up with an interger - I want arr[j], what if the array is empty? 
// My steps
    // use the "two pointers" approach
    // declare a results variable
    // declare two variables assigning them values of indexes indexes
    // if the two indexes are equal move the second index one increment
    // if the first and second index are not equal assign the first index with that value and move the both indexes up 1 increment
    // continue until the loop reaches the end of the array

// I did not think clearly on how the pointers are going to increment

    