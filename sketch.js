var spacecraft, space, iss;
var spaceImg, spacecraftImg, issImg;

function preload(){

  spaceImg = loadImage("space.jpg");
  issImg = loadImage("iss.png");
  spacecraftImg = loadImage("spacecraft1.png")
  
}

function setup(){
  
  var canvas = createCanvas(400,400);

  space = createSprite(200,200,20,20);
  space.addImage("space",spaceImg);

  spacecraft = createSprite(200,300,20,20);
  spacecraft.addImage("spacecraft",spacecraftImg);
  spacecraft.scale=0.2;
  
  spacecraft.setCollider("circle",0,0,300);
  spacecraft.debug = false;

  iss = createSprite(200,150,50,50);
  iss.addImage("iss",issImg);
  iss.scale= 0.2;

  iss.setCollider("circle",0,-10,100);
  iss.debug = false;
  

}

function draw(){

  background("yellow");

  if(keyDown(UP_ARROW)){

    spacecraft.y = spacecraft.y-0.8;

  }

  if(keyDown(RIGHT_ARROW)){

    spacecraft.x = spacecraft.x+0.8;

  }

  if(keyDown(LEFT_ARROW)){

    spacecraft.x = spacecraft.x-0.8;

  }


  drawSprites();

  if(spacecraft.isTouching(iss)){
    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;
    text("DOCKING SUCCESSFULL",100, 300);


  }

}