const des = require('./FindKim');

describe('작동하나?', () => {
    it('1번에 김서방', () => {
      expect(des.solution(['a','Kim','b'])).toBe("김서방은 1에 있다");
    });
    it('5번에 김서방', () => {
        expect(des.solution(['a','b','c','d','e','Kim'])).toBe('김서방은 5에 있다');
      });
    it('3번에 김서방', () => {
        expect(des.solution(['a','b','c','Kim','e','f'])).toBe('김서방은 3에 있다');
      });
  });