var ground, ball, wall1, base , wall2,dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	ball = new BallClass(100,600,50)
    ground = new Ground(400,height,800,20);

    World.add(world, ground);
    dustbin = new Dustbin(500,600,120,150)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  dustbin.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
  }
}

