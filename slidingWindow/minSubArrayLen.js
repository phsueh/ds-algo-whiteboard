// write a function that accepts 2 parameters - an array of possitive integers and a positive integer

// function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one return 0



function minSubArrayLen(arr, sum){
    let total = 0
    let start = 0 
    let end = 0
    let minLength = Infinity

    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end]
            end++
        } else if (total >= sum) {
            minLength = Math.min(minLength, end-start)
            total -= arr[start]
            start++
        } else {
            break
        }
    }

    return minLength === Infinity ? 0 : minLength

    // loop over array add arr[i] ++ until it equals num
    // find that length and store to a variable

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))