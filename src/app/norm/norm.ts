/**
 * Computes the Manhattan norm point.
 * The Manhattan norm is the sum of the absolute values of the x and y coordinates. 
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @returns {number} The Manhattan norm of the point (x, y).
 */
export function manhattanNorm(x: number, y: number): number {
    return Math.abs(x) + Math.abs(y);
  }
  
  /**
   * Computes the Euclidean norm point.
   * The Euclidean norm is the straight-line distance from the origin to the point (x, y). 
   * @param {number} x - The x-coordinate of the point.
   * @param {number} y - The y-coordinate of the point.
   * @returns {number} The Euclidean norm of the point (x, y).
   */
  export function euclideanNorm(x: number, y: number): number {
    return Math.sqrt(x * x + y * y);
  }
  
// Variant 2: Using a point object
export function manhattanNormPoint(point: { x: number; y: number }): number {
  return Math.abs(point.x) + Math.abs(point.y);
}

export function euclideanNormPoint(point: { x: number; y: number }): number {
  return Math.sqrt(point.x * point.x + point.y * point.y);
}
