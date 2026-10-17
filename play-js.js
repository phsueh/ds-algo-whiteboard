// LC 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

// let input = "()[]{}"
let input = "hello world 123"

function play(s) {

    if (s.length % 2 > 0) return false; 

    let map = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }

    let stack = [];
    stack.push(s[0]); 

    for (let i = 1; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else if (map[stack.at(-1)] !== s[i]) {
            return false; 
        } else if (map[stack.at(-1)] === s[i]) {
            stack.pop();
        }
    }

    if (stack.length > 0) return false; 

    return true; 

}

play(input); 