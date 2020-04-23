const control = require('./HandleString');

describe('작동하나?', () => {
    it('길이가 4', () => {
      expect(control.solution("a234")).toBe(false);
    });
    it('길이가 6', () => {
        expect(control.solution("123456")).toBe(true);
      });
    it('길이가 5', () => {
        expect(control.solution("12345")).toBe(false);
      });
  });