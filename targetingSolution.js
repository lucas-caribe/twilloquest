class TargetingSolution {
  constructor({ x, y, z }) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}