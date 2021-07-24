 var ship,shiping;

 var sea,seaing;

function preload(){
  shiping=loadAnimation("ship-1.png");
  seaing=loadImage("sea.png");  
}

function setup(){
  createCanvas(400, 400);
ship=createSprite(100,300);
ship.addAnimation("ship",shiping);
ship.scale=0.3;

sea=createSprite(200,200);
sea.addImage(seaing);
sea.velocityx=-2; 
sea.depth=0 
sea.scale=0.9
}

function draw() {
  background("blue");
  drawSprites();
  reset
}

function reset(){
  if(sea.x< 0){
   sea.x= sea.width/2;
  }
}