// src/norm-functions.ts

// Enum for Version Selection
export enum NormVersion {
  V1 = "V1",
  V2 = "V2",
}

//Variant 1: Using two parameters (x, y)
export function manhattanNorm(x: number, y: number, version: NormVersion = NormVersion.V1): number {
  switch (version) {
    case NormVersion.V1:
      return Math.abs(x) + Math.abs(y); //Version 1: Direct computation
    case NormVersion.V2:
      return Math.abs([x, y][0]) + Math.abs([x, y][1]); // Version 2: Using an array representation
    default:
      throw new Error("Invalid version");
  }
}

export function euclideanNorm(x: number, y: number, version: NormVersion = NormVersion.V1): number {
  switch (version) {
    case NormVersion.V1:
      return Math.sqrt(x * x + y * y); //Version 1: Direct computation
    case NormVersion.V2:
      return Math.sqrt([x, y][0] * [x, y][0] + [x, y][1] * [x, y][1]); // Version 2: Using an array representation
    default:
      throw new Error("Invalid version");
  }
}

// Variant 2: Using a point object
export function manhattanNormPoint(point: { x: number; y: number }, version: NormVersion = NormVersion.V1): number {
  switch (version) {
    case NormVersion.V1:
      return Math.abs(point.x) + Math.abs(point.y); //Version 1: Direct object access
    case NormVersion.V2:
      return Math.abs(point["x"]) + Math.abs(point["y"]); //Version 2: Using property access by key
    default:
      throw new Error("Invalid version");
  }
}

export function euclideanNormPoint(point: { x: number; y: number }, version: NormVersion = NormVersion.V1): number {
  switch (version) {
    case NormVersion.V1:
      return Math.sqrt(point.x * point.x + point.y * point.y); // 🔹 Version 1: Direct object access
    case NormVersion.V2:
      return Math.sqrt(point["x"] * point["x"] + point["y"] * point["y"]); // 🔹 Version 2: Using property access by key
    default:
      throw new Error("Invalid version");
  }
}
