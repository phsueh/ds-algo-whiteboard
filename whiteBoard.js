function countOccurrences(arr) {
  // Initialize an array to store the counts with a fixed size of 100
  const counts = Array(100).fill(0);

  // Count occurrences of each value
  arr.forEach(value => {
    counts[value]++;
  });

  // Generate the result array based on counts
  const result = [];
  for (let i = 0; i < counts.length; i++) {
    for (let count = 0; count < counts[i]; count++) {
      result.push(i);
    }
  }

  return result;
}

// Example usage:
const inputArray = [4, 2, 4, 5, 2, 3, 1, 3];
const resultArray = countOccurrences(inputArray);
console.log(resultArray);
