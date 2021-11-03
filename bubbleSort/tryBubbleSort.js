// given an arr of numbers sort the array where the values are smallest to largest

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

// based on the optimized solution it's a good candidate if I know my data is reletively sorted - it can be o(n) otherwise it's o(n^2)