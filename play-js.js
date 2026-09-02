// LC 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// let input = "()[]{}"
let input = "hello world 123"

function play(s) {

    let stack = [];
    let map = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    for (let char in s) {

        if (!map[s[char]]) {
            console.log("s[char] ---> ", s[char])
            console.log("false"); 
            return false; 
        }
        // check if there is a value in stack 
        // only push open brackets to stack
        console.log("s[char]", s[char]); 
    }

    // let m = {}; 
    // console.log("input : ", s[char])
    // console.log(map["("]);  
    // console.log(!!m["("]); 

}

play(input); 