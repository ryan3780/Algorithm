const day = require("./WhichDay");

describe("작동하나?", () => {
  it("완주하지 못한 사람 찾기", () => {
    expect(day.solution(5, 24)).toBe("TUE");
  });
  it("완주하지 못한 사람 찾기", () => {
    expect(day.solution(5, 25)).toBe("WED");
  });
  it("완주하지 못한 사람 찾기", () => {
    expect(day.solution(5, 26)).toBe("THU");
  });
  it("완주하지 못한 사람 찾기", () => {
    expect(day.solution(5, 27)).toBe("FRI");
  });
  it("완주하지 못한 사람 찾기", () => {
    expect(day.solution(5, 28)).toBe("SAT");
  });
});
