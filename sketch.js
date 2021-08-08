const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boxes = [];
function setup(){
   createCanvas(3000,800);
   engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,600,1200,20);
   
   for(var i = 0; i<6; i++){
    box = new Box(900,100);
    boxes.push(box);
   }
   for(var i = 0; i<7; i++){
    box = new Box(800,100);
    boxes.push(box);
   }
   for(var i = 0; i<8; i++){
    box = new Box(700,100);
    boxes.push(box);
   }

   ball = new Ball(250,200);
   rope = new Rope(ball.body,{x: 500,y: 50});

}

function draw(){
    background("grey");
    Engine.update(engine);

    ground.display();
    for(var i = 0; i<boxes.length;i++){
        boxes[i].display();

    }
    ball.display();
    rope.display();



}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});

}