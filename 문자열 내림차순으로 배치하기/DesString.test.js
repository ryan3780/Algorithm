const des = require('./DesString');

describe('작동하나?', () => {
    it('완주하지 못한 사람 찾기', () => {
      expect(des.solution("Zbcdefg")).toBe("gfedcbZ");
    });
    it('완주하지 못한 사람 찾기', () => {
        expect(des.solution("abcdefg")).toBe('gfedcba');
      });
    it('완주하지 못한 사람 찾기', () => {
        expect(des.solution("AbCdEfG")).toBe('fdbGECA');
      });
  });