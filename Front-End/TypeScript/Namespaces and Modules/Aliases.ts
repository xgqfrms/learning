/*

Aliases
*/

namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons;
let sq = new polygons.Square(); // 与 'new Shapes.Polygons.Square()' 一样
