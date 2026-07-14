const charMap = new Map([
  ["&quot;", '"'],
  ["&apos;", "'"],
  ["&amp;", "&"],
  ["&gt;", ">"],
  ["&lt;", "<"],
  ["&frasl;", "/"],
]);

let temp = "";
let character = "";
let result = "";

for (let char of text) {
  temp += char;
  if (charMap.has(temp)) {
    result += char;
    character = charMap.get(temp);
    result.replace(temp, character);
    temp = "";
  } else {
    result += char;
  }
}

return result;


// max depth solution

  // if (!root) {
  //     return 0;
  // }
  // return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));