// Implement selection sort, sort smallest value to largest value given an array of intergers. Selection sort the smallest value is being swapped to the beginning better for memeory management because less swapping occures comparied to bubble sort. O(n^2). Sorted data is accumulating at the beginning. Selection sort is finding the the minimum value and put it in the front. Swap the minimum value with the index that the loop started with

// determine the lowest value "within each loop", save that value, then move that value to the beginning
// the lowest is being being updated and then compared in the inner loop


// console.log(
//   selectionSort([0,2,34,22,10,19,17]), 
//   selectionSort([-3, -2, -1, 0, 1, 2, 3, 34])
// )

// LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

// ES2015 VERSION
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}




// lessons learned
