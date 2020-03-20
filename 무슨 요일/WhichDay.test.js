const day = require("./WhichDay");

describe("작동하나?", () => {
  it("5월 24일", () => {
    expect(day.solution(5, 24)).toBe("TUE");
  });
  it("5월 25일", () => {
    expect(day.solution(5, 25)).toBe("WED");
  });
  it("5월 26일", () => {
    expect(day.solution(5, 26)).toBe("THU");
  });
  it("5월 27일", () => {
    expect(day.solution(5, 27)).toBe("FRI");
  });
  it("5월 28일", () => {
    expect(day.solution(5, 28)).toBe("SAT");
  });
});
