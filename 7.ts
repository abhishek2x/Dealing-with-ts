// Class (TO avoid voilating the cohesion principle)

class Point{            // This point is class
    x: number;
    y : number;

    constructor(x ?:number, y?: number){        // making optional
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    
}

let point = new Point();        // This point is Object
point.draw()
