'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
    function Shape(id, x, y) {
        _classCallCheck(this, Shape);

        this.id = id;
        this.move(x, y);
    }

    _createClass(Shape, [{
        key: 'move',
        value: function move(x, y) {
            this.x = x;
            this.y = y;
        }
    }]);

    return Shape;
}();

var Rectangle = function (_Shape) {
    _inherits(Rectangle, _Shape);

    function Rectangle(id, x, y, width, height) {
        _classCallCheck(this, Rectangle);

        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

        _this.width = width;
        _this.height = height;
        return _this;
    }

    return Rectangle;
}(Shape);

var Circle = function (_Shape2) {
    _inherits(Circle, _Shape2);

    function Circle(id, x, y, radius) {
        _classCallCheck(this, Circle);

        var _this2 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this, id, x, y));

        _this2.radius = radius;
        return _this2;
    }

    return Circle;
}(Shape);

var circle = new Circle('firstCircle', 3, 4, 5);

console.log('before move circle = ' + circle);
console.log(circle);
// Circle {id: "firstCircle", x: 3, y: 4, radius: 5}

circle.move(10, 20);

console.log('after moved circle = ' + circle);
console.log(circle);
// Circle {id: "firstCircle", x: 10, y: 20, radius: 5}
//# sourceMappingURL=maps/inheritance.js.map
