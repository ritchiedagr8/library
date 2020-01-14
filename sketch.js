var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  a = createSprite(400, 500,80,30);
 a.shapeColor = "green";
  a.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}



function draw() {
  background(0,0,0);  
isTouching(movingRect,a);
 bounceOff(movingRect,fixedRect);
  drawSprites();
}