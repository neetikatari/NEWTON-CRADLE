  
class Bob {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2,
            isStatic:false
        }; 
        this.x=x;
        this.y=y;
        this.r=r; 
        
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world, this.body);
    };

    display() { 
        var paperpos = this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        fill("purple") ;
        ellipse(0,0,this.r,this.r);
        pop()

    };
};