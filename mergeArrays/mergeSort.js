// Prompt: Implement merge sort
// taking 2 sorted arrays and then combining them into 1 sorted array
// Merge function from earlier
// comparing each item on left to the item on the right first
// O(Log N) runtime, no randomization happening

// the merge function is also sorting
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
// breaking the array
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])
mergeSort([1,10,50], [2,14,99,100])
mergeSort([1,10,50,2,14,99,100])