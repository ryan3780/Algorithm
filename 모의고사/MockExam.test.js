const exam = require("./MockExam");

describe("작동하나?", () => {
  it("첫번째 시험", () => {
    expect(exam.solution([1, 2, 3, 4, 5])).toEqual([1]);
  });
  it("두번째 시험", () => {
    expect(exam.solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
  });
});
