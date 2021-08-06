const Engine = Matter.Engine
const World = Matter.World
const  Events = Matter.Events
const Bodies = Matter.Bodies

var ice=[]
var maxsnow=100
function preload(){
  snowbg=loadImage("snow1.jpg")
  boy1=loadAnimation("sprites/boy1.gif")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 kid=createSprite(200, 300, 50, 50);
 kid.addAnimation("running",boy1)
 if(frameCount%300===0){
  for (let index = 0; index < maxsnow; index++) {
   ice.push(new Snow(random(0,800),random(0,50),random(10,30)))
    
  }
 }
}

function draw() {
  background(snowbg);
  Engine.update(engine) 
  for (let index = 0; index < maxsnow; index++) {
   ice[index].display()
    ice[index].changePosition()
  } 
  drawSprites();
}