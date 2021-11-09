function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let str=''
        if (i % 3 === 0) str += "fizz"
        if (i % 5 === 0) str += "buzz"
        if (str === '') str = i;
        console.log(i)
        console.log(str)
    } 
}

console.log(fizzBuzz(15))