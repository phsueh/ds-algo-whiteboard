// Attempt 3

// write a function that accepts 2 parameters - an array of possitive integers and a positive integer

// function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one return 0

// use sliding window pattern

// console.log(
//     minSubArrayLen([2,3,1,2,4,3], 7), // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9), // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52), // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39), // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55), // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// minSubArrayLen([5,1,3,5,10,7,4,9,2,8], 15), // 2
// minSubArrayLen([1,2,3,4,5], 11), // 3 ,
// minSubArrayLen([1,4,4], 4) // 1 
// )

// Time Complexity - O(n)

// Space Complexity - O(1)

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
    // while-loop stops when star is greater than the arr lenght or when total is less than sum and end is greater than arr length

}

console.log(
    minSubArrayLen([2,3,1,2,4,3], 7), // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9), // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52), // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39), // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55), // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0    
)

// the below solutions does not work I want to figure out why someday

var minSubArrayLen2 = function(target, nums) {
        
    let current = 0; 
    let pointer = 0 
    let minLength = nums.length; //4
    let currentMinLength = nums.length;
    let sum = 0;

    while (current <= nums.length && pointer < nums.length) {
        if (nums[current] === target) return 1;
        if (sum < target) {
            sum += nums[pointer];
            console.log(sum)
            pointer++; //4
        } else {
            currentMinLength = pointer - current; // accouting for zeroth index
            minLength = Math.min(minLength, currentMinLength);
            current++; 
            pointer = current; 
            sum = 0; 
        }
    }

    

    if (sum < target) {
        return 0;
    } else {
        return minLength;
    }
}