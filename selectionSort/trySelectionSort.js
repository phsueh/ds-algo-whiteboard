function sort(arr){
    if (arr.length === 0) {
        return []
    }

    let smallest = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++)
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }

    return arr

}

console.log(sort[34,22,10,19,17])