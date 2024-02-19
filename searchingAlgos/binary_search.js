// Original Solution

// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// console.log(
    // binarySearch([1,2,3,4,5],2), // 1
    // binarySearch([1,2,3,4,5],3), // 2
    // binarySearch([1,2,3,4,5],5), // 4
    // binarySearch([1,2,3,4,5],6), // -1
    // binarySearch([2,5,6,9,13,15,28,30], 28), // 6
    // binarySearch([
    //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    // ], 10), // 2
    // binarySearch([
    //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    // ], 95), // 16
    // binarySearch([
    //   5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    //   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
    // ], 100) // -1
// )

// ([1,2,3,4,5],2), // 1
// ([1,2,3,4,5],6), // -1


function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle; 
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

// Recursive
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    // Base case: If the start index is greater than the end index, the target is not in the array.
    // because start should always be less than end
    if (start > end) {
      return -1;
    }
  
    // Calculate the middle index.
    const mid = Math.floor((start + end) / 2);
  
    // Check if the middle element is the target.
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      // If the target is greater than the middle element, search in the right half.
      return binarySearch(arr, target, mid + 1, end);
    } else {
      // If the target is less than the middle element, search in the left half.
      return binarySearch(arr, target, start, mid - 1);
    }
  }
  
  // Example usage:
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const targetValue = 7;
  
  const result = binarySearch(sortedArray, targetValue);
  console.log(result); // Output: 6 (index of the target value)