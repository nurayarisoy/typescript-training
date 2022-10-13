export class Shape{

    constructor( private _x: number,private _y:number) {   
    }

    public get x(): number{
      return this._x;
    }
    public set x(value:number){
      this.x = value;
    }
    
    public get y(): number{
      return this.y;

    }
    public set y(value: number){
      this.y = value;
    } 

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }
}
