
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var paperBody, dustbinBody;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBody = new Paper1(200,100,50);
	dustbinBody = new dustbin(1200,650)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperBody.display(); 
  dustbinBody.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBody.body,paperBody.body.position, {x:88, y:-88} )
}


}

