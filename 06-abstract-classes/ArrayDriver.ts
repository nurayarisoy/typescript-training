import { Shape } from './Shape';
import { circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);
// ddeclare an array of shapes ...initiay empty
let theShapes: Shape[]=[];
//add the shapes to the array

theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}