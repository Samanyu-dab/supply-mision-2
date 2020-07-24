var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rec1,rec2,rec3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rec1=createSprite(300,620,20,100)
	rec1.shapeColor="red"

	rec2=createSprite(390,660,200,20)
	rec2.shapeColor="red"

	rec3=createSprite(500,620,20,100)
	rec3.shapeColor="red"




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		console.log("down")
		packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:false});
		World.add(world, packageBody);
	}
}
  




