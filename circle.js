// import { Shape } from "./shape";

// class Circle extends Shape {

// calculateArea(){
//     return "calculate area from child class";
// }

// }
var Shape = require('./shape.js');
class Circle extends Shape {
    constructor() { super(); this.radius = 9; }
    calculateArea() { return "Calculated area of circle"; }
}
module.exports = Circle;
