// write function that returns the number of unique values in a sorted array

function countUniquevallues(arr){
    if (arr.length === 0) return 0
    // create a variable for the first pointer
    let i = 0
    for (let j = 0; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniquevallues([]))