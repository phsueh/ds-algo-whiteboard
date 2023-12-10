function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const strArray = s.split('');
    let i = 0;
    let j = strArray.length - 1;
  
    while (i < j) {
      while (i < j && !vowels.has(strArray[i])) {
        i++;
      }
  
      while (i < j && !vowels.has(strArray[j])) {
        j--;
      }
  
      // Swap vowels at positions i and j
      [strArray[i], strArray[j]] = [strArray[j], strArray[i]];
  
      i++;
      j--;
    }
  
    return strArray.join('');
  }
  
  // Example usage:
  const inputString = "hello";
  const reversedString = reverseVowels(inputString);
  console.log(reversedString); // Output: "holle"
