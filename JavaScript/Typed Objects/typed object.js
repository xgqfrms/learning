// typed object 


const Point2D = new StructType({ x: uint32, y: uint32 });
const Color = new StructType({ r: uint8, g: uint8, b: uint8 });
const Pixel = new StructType({ point: Point2D, color: Color });

const Triangle = Pixel.Array(3);

let t = Triangle([
    { point: { x: 0, y: 0 }, color: { r: 255, g: 255, b: 255 } },
    { point: { x: 5, y: 5 }, color: { r: 128, g: 0, b: 0 } },
    { point: { x: 10, y: 0 }, color: { r: 0, g: 0, b: 128 } }
]);
