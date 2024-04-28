function permutations(input: string): Array<string> {
  if (input.length <= 1) {
    return [input];
  }
  const results = [];
  // 23
  for (let i = 0; i < input.length; i++) {
    const first = input[i]; // 2 // 3
    const rest = input.slice(0, i) + input.slice(i + 1); // 3 // 2
    const restPermutations = permutations(rest); // 3 // 2
    // [3] // [2]
    for (let j = 0; j < restPermutations.length; j++) {
      results.push(first + restPermutations[j]); // 23 // 32
    }
  }
  return [...new Set(results)]; // [23] // [23, 32]
}

export { permutations };
