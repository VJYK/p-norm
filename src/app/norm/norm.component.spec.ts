import { manhattanNorm, euclideanNorm, manhattanNormPoint, euclideanNormPoint } from './norm';

describe('Norm Calculations', () => {

  describe('Variant 1: Separate x and y parameters', () => {
    it('should correctly compute the Manhattan norm', () => {
      expect(manhattanNorm(3, 4)).toBe(7);
      expect(manhattanNorm(-3, -4)).toBe(7);
      expect(manhattanNorm(0, 0)).toBe(0);
    });

    it('should correctly compute the Euclidean norm', () => {
      expect(euclideanNorm(3, 4)).toBeCloseTo(5, 5);
      expect(euclideanNorm(-3, -4)).toBeCloseTo(5, 5);
      expect(euclideanNorm(0, 0)).toBe(0);
    });
  });

  describe('Variant 2: Using a point object', () => {
    it('should correctly compute the Manhattan norm', () => {
      expect(manhattanNormPoint({ x: 3, y: 4 })).toBe(7);
      expect(manhattanNormPoint({ x: -3, y: -4 })).toBe(7);
      expect(manhattanNormPoint({ x: 0, y: 0 })).toBe(0);
    });

    it('should correctly compute the Euclidean norm', () => {
      expect(euclideanNormPoint({ x: 3, y: 4 })).toBeCloseTo(5, 5);
      expect(euclideanNormPoint({ x: -3, y: -4 })).toBeCloseTo(5, 5);
      expect(euclideanNormPoint({ x: 0, y: 0 })).toBe(0);
    });
  });

});
