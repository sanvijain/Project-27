class Bob{
constructor(x,y,r){
var options={
    isStatic: false,
    restitution:0.3,
    friction:0.5,
    density:1.2 
}
    this.x=x;
    this.y=y;
    this.r=r;
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);

    World.add(world,this.body);
}
display(){
   var pos =this.body.position;
   
    push();
    
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("black");
    fill(254,0,255);
    ellipse(pos.x,pos.y,50);
    pop();
}
}