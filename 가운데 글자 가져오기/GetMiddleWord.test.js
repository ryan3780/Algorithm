const word = require("./GetMiddleWord");

describe("작동하나?", () => {
  it("5글자", () => {
    expect(word.solution("abcde")).toBe("c");
  });
  it("4글자", () => {
    expect(word.solution("qwer")).toBe("we");
  });
  it("7글자", () => {
    expect(word.solution("abcdefg")).toBe("d");
  });
  it("8글자", () => {
    expect(word.solution("abcdefgh")).toBe("de");
  });
  it("1글자", () => {
    expect(word.solution("a")).toBe("a");
  });
});
