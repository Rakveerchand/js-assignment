
import { Shape } from "./Shape";
class Circle extends Shape
{
    constructor() { super(); this.radius = 9; }
    calculateArea()
    {
        return "hello";
    }
}
module.exports = Circle;
