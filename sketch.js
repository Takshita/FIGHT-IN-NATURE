const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  deer1,deer2;
var backgroundImg,platform;
var lion, slingshot;

function preload() {
    backgroundImg = loadImage("nature.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    deer1 = new Deer(810, 350);
  
    deer2 = new Deer(810, 220);

    lion = new Lion(100,100);

    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    deer1.display();
    
    deer2.display();
   
    lion.display();
    platform.display();
  
    slingshot.display();    
}
function mouseDragged(){
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
slingshot.fly();

}



