
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
ground = createSprite(400,690,800,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

}
