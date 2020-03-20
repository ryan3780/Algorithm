const divide = require("./DivideNumber");

describe("작동하나?", () => {
  it("[5, 9, 7, 10]", () => {
    expect(divide.solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
  });
  it("[2, 36, 1, 3]", () => {
    expect(divide.solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
  });
  it("[3,2,6]", () => {
    expect(divide.solution([3, 2, 6], 10)).toEqual([-1]);
  });
});
