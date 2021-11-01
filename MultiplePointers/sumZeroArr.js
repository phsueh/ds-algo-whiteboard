// write a function that returns 2 elements in an array that sum to 0
// this solution does not return all combination though

// naive solution

// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// refactored solution

function sumZero(arr){
    let left = 0
    let right = arr.length-1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
        } else {
            left ++
        }
    }
}




console.log(sumZero([-4,-3,-2,-1,0,1,2,4,5]))
console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))