class Roof{
    constructor(x,y,width,height){
        //var options = {
          //  isStatic: true,
            
        //}
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}
