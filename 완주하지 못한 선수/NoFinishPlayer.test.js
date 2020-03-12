const stats = require('./NoFinishPlayer');

describe('작동하나?', () => {
    it('완주하지 못한 사람 찾기', () => {
      expect(stats.solution(['leo', 'kiki', 'eden'],['eden', 'kiki'] )).toBe("leo");
    });
    it('완주하지 못한 사람 찾기', () => {
        expect(stats.solution(["marina","josipa","nikola","vinko","filipa"],["josipa","filipa","marina","nikola"] )).toBe('vinko');
      });
    it('완주하지 못한 사람 찾기', () => {
        expect(stats.solution(["mislav","stanko","mislav","ana"],["stanko","ana","mislav"] )).toBe('mislav');
      });

  });