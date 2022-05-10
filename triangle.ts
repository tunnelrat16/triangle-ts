export class Triangle {
  side1: number;
  side2: number;
  side3: number;

  constructor(side1: number, side2: number, side3: number) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get isTriangle() {
    return (
      this.conformsToSideLaw &&
      this.side1 > 0 &&
      this.side2 > 0 &&
      this.side3 > 0
    );
  }

  get conformsToSideLaw() {
    return (
      this.side1 + this.side2 >= this.side3 &&
      this.side2 + this.side3 >= this.side1 &&
      this.side3 + this.side1 >= this.side2
    );
  }

  get isEquilateral() {
    return (
      this.isTriangle && this.side1 === this.side2 && this.side1 === this.side3
    );
  }
  get isIsosceles() {
    return (
      this.isTriangle &&
      (this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3)
    );
  }

  get isScalene() {
    return (
      this.isTriangle &&
      this.side1 !== this.side2 &&
      this.side2 !== this.side3 &&
      this.side1 !== this.side3
    );
  }
}
