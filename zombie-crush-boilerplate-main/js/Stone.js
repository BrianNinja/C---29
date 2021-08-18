class Stone {

    constructor(x,y,width,height,colour){
        var option = {
            restitution: 0.7

        }
        
        
        this.body = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        this.w = width;
        this.h = height;
        this.colour = colour;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        fill(this.colour);
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);
        pop();

    
    }
}