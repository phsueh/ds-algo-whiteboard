let selectionSort = (arr) => {

    // example = [3,0,4,2]

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = 1+i; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j; 
            }
        }
        if (i !== lowest) {
            let temp = arr[i];
            arr[i] = arr[lowest]
            arr[lowest] = temp; 
        }
    }

    return arr;

}

console.log(
  selectionSort([0,2,34,22,10,19,17]), 
  selectionSort([-3, -2, -1, 0, 1, 2, 3, 34])
)