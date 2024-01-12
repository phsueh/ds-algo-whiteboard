let selectionSort = (arr) => {

    let swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i; 
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) lowest = j; 
        }

        if (lowest !== i) swap(arr, i, lowest); 
    }

    return arr; 
}

console.log(
    selectionSort([0,2,34,22,10,19,17]),
    selectionSort([-3, -2, -1, 0, 1, 2, 3, 34]),
    )