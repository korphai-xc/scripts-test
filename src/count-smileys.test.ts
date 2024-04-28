import { countSmiley } from "./count-smileys";

describe("countSmiley", () => {
  it('[":)", ";(", ";}", ":-D"]; // should return 2;', () => {
    expect(countSmiley([":)", ";(", ";}", ":-D"])).toBe(2);
  });
  it('[";D", ":-(", ":-)", ";~)"]; // should return 3;', () => {
    expect(countSmiley([";D", ":-(", ":-)", ";~)"])).toBe(3);
  });
  it('[";]", ":[", ";*", ":$", ";-D"]; // should return 1;', () => {
    expect(countSmiley([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
  });
});
