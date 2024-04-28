import { permutations } from "./permutations";

describe("permutations", () => {
  it("should return all permutations of a string", () => {
    const input = "12";
    const expectedResult = ["12", "21"];
    const result = permutations(input);
    expect(result).toEqual(expectedResult);
  });

  it("With input 'a':", () => {
    const input = "a";
    const expectedResult = ["a"];
    const result = permutations(input);
    expect(result).toEqual(expectedResult);
  });

  it("With input 'ab':", () => {
    const input = "ab";
    const expectedResult = ["ab", "ba"];
    const result = permutations(input);
    expect(result).toEqual(expectedResult);
  });

  it("With input 'abc':", () => {
    const input = "abc";
    const expectedResult = ["abc", "acb", "bac", "bca", "cab", "cba"];
    const result = permutations(input);
    expect(result).toEqual(expectedResult);
  });

  it("With input 'aabb':", () => {
    const input = "aabb";
    const expectedResult = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];
    const result = permutations(input);
    expect(result).toEqual(expectedResult);
  });
});
