// sort - sort both 2 arrays
// merge sort - split the array down to smaller array sand recursively call sort and the left and right of arr

function sort(arr1, arr2) {
    let result = []; 
    let i = 0; 
    let j = 0; 

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return sort(left, right);
}

console.log(mergeSort([8,1,2,3,4,5,6,7]));