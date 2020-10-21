var fixedRect, movingRect;



function setup() {
  createCanvas(1600,1600);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,200,80,30);
  rectOnef = createSprite(600,200,50,50);
  rectTwom = createSprite(600,100,80,30);
  rectOnef.shapeColor = "pink";
  rectTwom.shapeColor = "blue";
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  rectTwom.velocityY = 2;
  rectOnef.velocityY = -2;
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

  if(rectOnef.x-rectTwom.x<rectOnef.width/2+rectTwom.width/2 
    && rectTwom.x-rectOnef.x<rectTwom.width/2+rectOnef.width/2){

      rectTwom.velocityX = rectTwom.velocityX * (-1);
      rectOnef.velocityX = rectOnef.velocityX * (-1);
    }

    if(rectOnef.y-rectTwom.y<rectOnef.height/2+rectTwom.height/2 &&
      rectTwom.y-rectOnef.y<rectTwom.height/2+rectOnef.height/2){

        rectTwom.velocityY = rectTwom.velocityY * (-1);
        rectOnef.velocityY = rectOnef.velocityY * (-1);
      }

  drawSprites();
}