// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than on pair that matches the average target. 
    // assumes that there are even element in array?

// function averagePair(arr, avg){
//     let i = 0

//     for (let j = 1; j < arr.length; j++) {
//         console.log(arr[i],arr[j])
//         if ((arr[i] + arr[j]) / 2 === avg) return true
//         i++
//     }

//     return false
    
// }

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
        console.log(arr[start], arr[end])
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      // because the array is sorted, if the average of the first and last is less than the target average I need to move the start up
      else if(avg < num) start++
      else end--
    }
    return false;
  }

console.log(averagePair([2,3,4,5,7,8,], 3))

// lesson learned
    // I need variable j to increment, cause my original solution only looped once
    // to find something targeted and if the array is sorted, then I can think whether to increment or decrement 