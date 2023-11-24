// check how a a next for-loop is working in the naive solution

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) { // i = 3, 2, 1 // we are decrementing so we end at zero
        noSwaps = true;
        for (let j = 0; j < i-1; j++) { // j = 2, 1, 0 - no more looping I can't loop negative times,
            // starting at zero, loop 2 times
            // starting at zero, loop 1 times
            // we are incrementing so we start at zero
            console.log(arr, arr[j], arr[j+1], j, j+1)
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                noSwaps = false; 
            }
        }
        if (noSwaps) break;
    }
}



function doesZeroLoop(arr) {
    for (let i = 0; i < 1; i++) {
        return "are you looping?"
    }
    return "I did not loop over " + arr
}

console.log(
    // bubbleSort([37,45,29,8]),
    doesZeroLoop([37,45,29,8])
)