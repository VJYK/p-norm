// src/norm-functions.spec.ts

import { manhattanNorm, euclideanNorm, manhattanNormPoint, euclideanNormPoint, NormVersion } from './norm';

describe('Norm Calculations', () => {

  describe('Variant 1: Separate x and y parameters', () => {
    it('should correctly compute the Manhattan norm (V1)', () => {
      expect(manhattanNorm(3, 4, NormVersion.V1)).toBe(7);
      expect(manhattanNorm(-3, -4, NormVersion.V1)).toBe(7);
      expect(manhattanNorm(0, 0, NormVersion.V1)).toBe(0);
    });

    it('should correctly compute the Manhattan norm (V2)', () => {
      expect(manhattanNorm(3, 4, NormVersion.V2)).toBe(7);
      expect(manhattanNorm(-3, -4, NormVersion.V2)).toBe(7);
      expect(manhattanNorm(0, 0, NormVersion.V2)).toBe(0);
    });

    it('should correctly compute the Euclidean norm (V1)', () => {
      expect(euclideanNorm(3, 4, NormVersion.V1)).toBeCloseTo(5, 5);
      expect(euclideanNorm(-3, -4, NormVersion.V1)).toBeCloseTo(5, 5);
      expect(euclideanNorm(0, 0, NormVersion.V1)).toBe(0);
    });

    it('should correctly compute the Euclidean norm (V2)', () => {
      expect(euclideanNorm(3, 4, NormVersion.V2)).toBeCloseTo(5, 5);
      expect(euclideanNorm(-3, -4, NormVersion.V2)).toBeCloseTo(5, 5);
      expect(euclideanNorm(0, 0, NormVersion.V2)).toBe(0);
    });
  });

  describe('Variant 2: Using a point object', () => {
    it('should correctly compute the Manhattan norm (V1)', () => {
      expect(manhattanNormPoint({ x: 3, y: 4 }, NormVersion.V1)).toBe(7);
      expect(manhattanNormPoint({ x: -3, y: -4 }, NormVersion.V1)).toBe(7);
      expect(manhattanNormPoint({ x: 0, y: 0 }, NormVersion.V1)).toBe(0);
    });

    it('should correctly compute the Manhattan norm (V2)', () => {
      expect(manhattanNormPoint({ x: 3, y: 4 }, NormVersion.V2)).toBe(7);
      expect(manhattanNormPoint({ x: -3, y: -4 }, NormVersion.V2)).toBe(7);
      expect(manhattanNormPoint({ x: 0, y: 0 }, NormVersion.V2)).toBe(0);
    });

    it('should correctly compute the Euclidean norm (V1)', () => {
      expect(euclideanNormPoint({ x: 3, y: 4 }, NormVersion.V1)).toBeCloseTo(5, 5);
      expect(euclideanNormPoint({ x: -3, y: -4 }, NormVersion.V1)).toBeCloseTo(5, 5);
      expect(euclideanNormPoint({ x: 0, y: 0 }, NormVersion.V1)).toBe(0);
    });

    it('should correctly compute the Euclidean norm (V2)', () => {
      expect(euclideanNormPoint({ x: 3, y: 4 }, NormVersion.V2)).toBeCloseTo(5, 5);
      expect(euclideanNormPoint({ x: -3, y: -4 }, NormVersion.V2)).toBeCloseTo(5, 5);
      expect(euclideanNormPoint({ x: 0, y: 0 }, NormVersion.V2)).toBe(0);
    });
  });

});
