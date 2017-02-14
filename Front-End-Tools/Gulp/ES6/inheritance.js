class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }
}

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

let circle = new Circle('firstCircle', 3, 4, 5);

console.log(`before move circle = ${circle}`);
console.log(circle);
// Circle {id: "firstCircle", x: 3, y: 4, radius: 5}

circle.move(10, 20);

console.log(`after moved circle = ${circle}`);
console.log(circle);
// Circle {id: "firstCircle", x: 10, y: 20, radius: 5}
