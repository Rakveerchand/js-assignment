// export class Shape{
//     constructor(color) {
//     this.color = "black";
//   }
    
// drawShape(){
//     return "drawShape";
// }
// calculateArea(){
//     return "calculate Area";
// }
// }

class Shape {
    constructor() { this.color = 'blue'; }
    drawShape() { return "A shape is drawn"; }
    calculateArea() { return "Area is calulated. "; }
}
module.exports = Shape;
