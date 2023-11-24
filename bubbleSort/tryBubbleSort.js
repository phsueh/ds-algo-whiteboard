// given an arr of numbers sort the array where the values are smallest to largest

// based on the optimized solution it's a good candidate if I know my data is reletively sorted - it can be o(n) otherwise it's o(n^2)
// if our data is almost sort, we might have problem because a long array would take up a lot of time
    // the solution is the check is to check if we did swap 
    // if not swaps up stop

function naiveBubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                //swap
                temp = arr[j]
                arr[j] = arr[j+1] // equal to the orignal smaller value between the 2
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(naiveBubbleSort([37,45,29,8]))
// Issues with this solution
// "it is cemented in place the first time through what does this mean?" - the largest number will always go to the top at the first loop
// the solution should try to "shrink the number of comparisons"
    // see issue after console log
        // [ 37, 45, 29, 8 ] 37 45
        // [ 37, 45, 29, 8 ] 45 29
        // [ 37, 29, 45, 8 ] 45 8
        // [ 37, 29, 8, 45 ] 45 undefined
        // [ 37, 29, 8, 45 ] 37 29
        // [ 29, 37, 8, 45 ] 37 8
        // [ 29, 8, 37, 45 ] 37 45
        // [ 29, 8, 37, 45 ] 45 undefined
        // [ 29, 8, 37, 45 ] 29 8
        // [ 8, 29, 37, 45 ] 29 37
        // [ 8, 29, 37, 45 ] 37 45
        // [ 8, 29, 37, 45 ] 45 undefined
        // [ 8, 29, 37, 45 ] 8 29
        // [ 8, 29, 37, 45 ] 29 37
        // [ 8, 29, 37, 45 ] 37 45
        // [ 8, 29, 37, 45 ] 45 undefined
        // undefined

// ------

// this solution decreases the amount of comparisons 

function betterBubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                //swap
                temp = arr[j]
                arr[j] = arr[j+1] // equal to the orignal smaller value between the 2
                arr[j+1] = temp
            }
        }
        console.log("one pass complete")
    }

    return arr

}

console.log(betterBubbleSort([37,45,29,8]))

// ------

// this solution stops the loop when no more swaps are made to avoid unnecessary pass throws 

function evenBetterBubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i-1; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                //swap
                temp = arr[j]
                arr[j] = arr[j+1] // equal to the orignal smaller value between the 2
                arr[j+1] = temp
                noSwaps = false
            }
        }
        console.log("one pass complete")
        if (noSwaps) break
    }

    return arr

}

console.log(evenBetterBubbleSort([8,1,2,3,4,5,6,7]))



function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) { // i = 3, 2, 1 // we are decrementing so we end at zero
        for (let j = 0; j < i-1; j++) { // j = 2, 1, 0 - no more looping I can't loop negative times,
            // starting at zero, loop 2 times
            // starting at zero, loop 1 times
            // we are incrementing so we start at zero
            console.log(arr, arr[j], arr[j+1], j, j+1)
            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}



function doesZeroLoop(arr) {
    for (let i = 0; i < 1; i++) {
        return "are you looping?"
    }
    return "I did not loop over " + arr
}

