function minRemoveToMakeValid(s) {
  const stack = [];
  const marked = new Set();

  // Iterate through the string to find unpaired parentheses
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(i);
      } else if (s[i] === ')') {
          if (stack.length === 0) {
              marked.add(i);
          } else {
              stack.pop();
          }
      }
  }

  // Add remaining unpaired opening parentheses to the set
  while (stack.length > 0) {
      marked.add(stack.pop());
  }

  // Build the result string without marked parentheses

  console.log(marked)
  let result = '';
  for (let i = 0; i < s.length; i++) {
    console.log(s[i])
      if (!marked.has(i)) { //if it's not marked
          result += s[i];
      }
  }

  return result;
}

const input = "lee(t(c)o)de)";
const result = minRemoveToMakeValid(input);
console.log(result); // Output: "lee(t(c)o)de"