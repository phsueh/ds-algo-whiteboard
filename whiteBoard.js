function groupThePeople(groupSizes) {
  const result = [];
  const groups = {};

  for (let i = 0; i < groupSizes.length; i++) {
      const size = groupSizes[i];

      if (!(size in groups)) {
          groups[size] = [i]; // Initialize group for the given size
      } else {
          groups[size].push(i); // Add person to the corresponding group
      }

      // If the group is complete, add it to the result and reset the group
      if (groups[size].length === size) {
          result.push(groups[size]);
          groups[size] = [];
      }
  }

  return result;
}

// Example usage:
const groupSizes = [3, 3, 3, 3, 3, 1, 3];
const result = groupThePeople(groupSizes);
console.log(result);
