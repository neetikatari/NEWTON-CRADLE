class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY
/*pointB property is not the position 
where the constraint will be anchored to, 
but how much away is the point from the center of the body
*/
//anchore (constraint) length is adjusted using length option
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB : {x:this.offsetX, y:this.offsetY},
            length : 300
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push()
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
        pop()
    }
    
}