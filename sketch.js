const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boyImage,ground,stone,string,mango1,mango2,mango3,treeimage

function preload(){
   boyImage = loadImage("boy.png")
   treeimage = loadImage("tree.png")
}

function setup() {
  createCanvas(800,700);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,680,800,60);

  boy = createSprite(150,600,20,10);
  boy.addImage("boy", boyImage)
  boy.scale = 0.1

  stone = new Stone(90,530,40)

  string = new String(stone.body,{x:190,y:330})
  
  mango1 = new Mango(580,200,30)
  mango2 = new Mango(630,280,30)
  mango3 = new Mango(530,240,30)
}
function draw() {
  background(255,255,255);  
  drawSprites();

  Engine.update(engine);
  
    mango1.display()
    mango2.display()
    mango3.display() 
    stone.display()
    string.display()
    ground.display()

 image(treeimage,380,100,400,600);  
}

function mouseDragged (){
  Matter.Body.setPosition(stone.body,{x:90,y:530});
}

function mouseReleased (){
  string.fly();
}

function detectCollision(stone,mango){
   mangoPos = mango.body.position
   stonePos = stone.body.position
   var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
  if(distance<= mango.radius+stone.radius){
    Matter.Body.setStatic(mango.body,false)
  }
  }