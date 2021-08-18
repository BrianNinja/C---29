class Base{

    constructor(x,y,width,height,colour){
        var option = {
            isStatic: true

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
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();

    
    }



    
    


}