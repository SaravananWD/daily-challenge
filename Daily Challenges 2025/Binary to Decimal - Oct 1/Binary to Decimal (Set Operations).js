function sym(...arrays) {
  return arrays
    .map((arr) => [...new Set(arr)]) // Remove duplicates from each array
    .reduce((result, currentArray) => {
      // Combine current result with new array, filtering out duplicates
      const combined = [...result, ...currentArray];
      return combined.filter(
        (item) => result.includes(item) !== currentArray.includes(item)
      );
    }, []);
}
