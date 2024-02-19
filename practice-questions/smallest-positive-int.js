// Write a function:

//     function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

//         N is an integer within the range [1..100,000];
//         each element of array A is an integer within the range [−1,000,000..1,000,000].

// test cases
// console.log(
//     solution([1, 3, 6, 4, 1, 2]), // 5
//     solution([1, 2, 3]), // 4
//     solution([-1, -3]) // 1
// )

function solution(a) {
    // sort arr a
    let sort = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
          if (arr[min] > arr[j]) {
            min = j;
          }
        }
        if (min !== i) {
          let temp = arr[i];
          arr[i] = arr[min];
          arr[min] = temp;
        }
      }
  
      return arr;
    };
  
    let sortedA = sort(a);
    let result = sortedA[sortedA.length - 1] + 1;
  
    for (let i = 1; i < sortedA.length; i++) {
      if (sortedA[i] > 0 && sortedA[i] !== sortedA[i-1] + 1) {
          result = sortedA[i-1] + 1; 
      }
    }
  
    if (result == 0) return 1;
  
    return result; 
  }