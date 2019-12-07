// Inter face  (It voilates Cohesion principle)
interface Point{
    x: number,
    y : number, 
}
let drawPoint = (point: (Point)) =>{                 //inline annotation
    //...
}

drawPoint({
    x : 1,
    y: 2
})


//OR


// let drawPoint = (point: { x: number, y : number}) =>{                 //inline annotation
//     //...
// }

// drawPoint({
//     x : 1,
//     y: 2
// })