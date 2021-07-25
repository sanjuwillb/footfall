var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  bimage = loadImage("snow2.jpg")
}
 


function draw() {
  background(bimage);
  textSize(20)
 
  Engine.update(engine);
  
  //display the paricles 
  if (frameCount%20===0){
    particles.push(new Particle(random(20,width+20),-40))
  }
  for (var v = 0; v < particles.length; v++) {
    particles[v].display();
  }
}