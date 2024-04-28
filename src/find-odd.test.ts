import { findOdd } from "./find-odd";

describe("findOdd", () => {
  it("[7] should return 7, because it occurs 1 time (which is odd).", () => {
    const input = [7];
    const expectedResult = { should: 7, occurs: 1 };
    const result = findOdd(input);
    expect(result).toEqual(expectedResult);
  });

  it("[0] should return 0, because it occurs 1 time (which is odd).", () => {
    const input = [0];
    const expectedResult = { should: 0, occurs: 1 };
    const result = findOdd(input);
    expect(result).toEqual(expectedResult);
  });

  it("[1,1,2] should return 2, because it occurs 1 time (which is odd).", () => {
    const input = [1, 1, 2];
    const expectedResult = { should: 2, occurs: 1 };
    const result = findOdd(input);
    expect(result).toEqual(expectedResult);
  });

  it("[0, 1, 0, 1, 0] should return 0, because it occurs 3 times (which is odd).", () => {
    const input = [0, 1, 0, 1, 0];
    const expectedResult = { should: 0, occurs: 3 };
    const result = findOdd(input);
    expect(result).toEqual(expectedResult);
  });

  it("[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).", () => {
    const input = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
    const expectedResult = { should: 4, occurs: 1 };
    const result = findOdd(input);
    expect(result).toEqual(expectedResult);
  });
});
