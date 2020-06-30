var fixedRect, movingRect,Rect1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect1 = createSprite(400,100,50,80);
  Rect1.shapeColor="blue";
  
  
  Rect1.velocityY= 5
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 
 bounceOff(Rect1,movingRect);
  drawSprites();
}
