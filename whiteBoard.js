// step 1 rephrase: In a larger string find the number of times a a substring occurs
// step 2 edgecase, usecases, inputs, outputs: can be use in searching for products or articles, inputs 2 strings, output integer, if string is empty, 
// step 3 sudo: 
    // create variable called count to store occurance 
    // loop over first string search the "row"
    // loop over second string 
        // check if the next character is the same  if not break out of the inner loop
        // if the the index we're on matches the length of the string increase the count
            // this is because we have a check to see if the next value is equal - this is how it works
    
// step 4 solve: 
// step 5 refactor: 

// when doing a nested for-loop what direction as we searching?

function naiveSearch(long, short) { 
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[j+i]) break
            if (j === short.length - 1) count++
        }
    }

    return short + " appears " + count + " time(s)"
}

console.log(
    naiveSearch("lorie loled", "lol")
)