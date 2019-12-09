// Class (TO avoid voilating the cohesion principle)

class Point{            // This point is class
    x: number;
    y : number;

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    
    getDistance(another: Point){
        // ..
    }
}

let point = new Point();        // This point is Object
point.x = 1;
point.y = 2;
point.draw()
