class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
    
    calcPerimeter() {
      let perimeter = this.sides * this.sideLength;
      console.log(`The perimeter of a ${this.name} with ${this.sides} sides and side length of ${this.sideLength} is ${perimeter}.`);
    }
  }
  
  const square = new Shape('Square', 4, 5);
  square.calcPerimeter();
  
  const triangle = new Shape('Triangle', 3, 3);
  triangle.calcPerimeter();
  