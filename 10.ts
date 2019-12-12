// more...
class Point{            // This point is class

    constructor(private x ?: number, private y?: number){        // making optional
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    
    get X(){
        return this.x;
    }

    set X(value){
        if(value < 0)
            throw new Error('Value cannot be less than 0');
        else this.x = value;
        
    }

    getY(){
        return this.y;
    }

    setY(value){
        if(value < 0)
            throw new Error('Value cannot be less than 0');
        else this.y = value;
        
    }
}

let point = new Point(1, 2);   // This point is Object


let x = point.X;
point.X = 190;
                                // Tow Different Ways
let y = point.getY();     
point.setY(54);

point.draw();
