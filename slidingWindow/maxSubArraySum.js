// Given an array of integers and a number, write a function, which finds the maximum sum of a subarray with the length of the nunber passed to the function

function maxSubarraySum(arr, num){
    if (arr.length < num) return null
    
    let maxSum = 0
    let tempSum = 0
    
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
        console.log(maxSum)
    }

    tempSum = maxSum
    console.log(tempSum, maxSum)

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum) // reassigning value of maxSum 
    }
    return maxSum 
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))

// lessons learned 
// "sliding window" does not mean that a window is moving through the loop rather. I am just subtracting and adding 
// The loop keeps running until we get through every value and then returns the maxSum
    // maxSum gets reassigned 