
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1; 
var roof;
var rope1;

//function preload()
//{
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,150,50);
	roof = new Roof(350,100,300,30);
	rope1 = new Rope(bob1.body,roof.body,-200,0);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  //drawSprites();
  bob1.display();
  roof.display();
  rope1.display();
 
}



