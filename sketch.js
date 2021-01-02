const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground,groundoptions,ball,balloption;



function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

groundoptions={
  isStatic:true
}
ground=Bodies.rectangle(200,390,400,20,groundoptions);
 World.add(world,ground);
 console.log(ground);

 balloption={
   restitution:1
 }
 ball=Bodies.circle(250,300,20,balloption);
 World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);
    rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);   
 ellipse(ball.position.x,ball.position.y,20,20);
}