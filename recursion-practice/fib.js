// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  // add whatever parameters you deem necessary - good luck!  

  let arr = [1, 1]

  // function is declared here, not exercuted until below
  function addMore(num) {
      if (arr.length === num) return
      let valuesToAdd = arr.slice(-2)
      // let sumOfLastTwo = valuesToAdd.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
          // this part could be rewritten I don't need to iterate here
      let sumOfLastTwo = valuesToAdd[0] + valuesToAdd[1]
      arr.push(sumOfLastTwo)
      return addMore(num)
  }

  addMore(num)

  let result = arr[num-1]
  return result
}

console.log(
  fib(4), // 3 1, 1, 2, 3, 5, 8
fib(10), // 55
fib(28), // 317811
fib(35) // 9227465
)

// here's the other solution 

// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2); //this is talking about sequence but where are the values determined?
// }

//fib(4) 3+2