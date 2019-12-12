// Class (TO avoid voilating the cohesion principle)
// Access modifier
class Point{            // This point is class

    constructor(private x ?: number, public y?: number){        // making optional
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    
}

let point = new Point(1, 2);        // This point is Object
point.draw()
