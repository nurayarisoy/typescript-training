"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const Shape_1 = require("./Shape");
class circle extends Shape_1.Shape {
    constructor(theX, theY, _radius) {
        super(theX, theY);
        this._radius = _radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this._radius, 2);
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInto() {
        return super.getInfo() + `,radius=${this._radius}`;
    }
}
exports.circle = circle;
