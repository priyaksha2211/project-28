
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy,slingShot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new Mango(910,200,30);
	mango2=new Mango(910,300,30);
	mango3=new Mango(980,130,30);
	mango4=new Mango(980,210,20);
	mango5=new Mango(980,300,30);
	mango6=new Mango(1060,80,30);
	mango7=new Mango(1080,170,30);
	mango8=new Mango(1060,270,30);
	mango9=new Mango(1150,110,30);
	mango10=new Mango(1150,250,30);
	mango11=new Mango(1250,200,30);

	stoneObj = new Stone(230, 410, 25);
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);

	slingShot = new SlingShot(stoneObj.body,{x: 230,y: 410});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  slingShot.display();
  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  textSize(25);
  text('Press SPACE to get second Chance to Play', 20, 40);

}

function mouseDragged(){
	if(slingShot.sling.bodyA){
    console.log("1", stoneObj.body);
		Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
		// slingShot.sling.bodyA = stoneObj.body;
    console.log("2", stoneObj.body);
	}
}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision (lstone,lmango){
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
      slingShot.attach(stoneObj.body)
  }
}

