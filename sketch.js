var fixedRect, movingRect;

var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(100,100,80,30);
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "red";

  gameObject1 = createSprite(100,100,80,30);
  gameObject2 = createSprite(200,100,80,30);
  gameObject3 = createSprite(300,100,80,30);
  gameObject4 = createSprite(400,100,80,30);
  gameObject1.shapeColor = "purple";
  gameObject2.shapeColor = "purple";
  gameObject3.shapeColor = "purple";
  gameObject4.shapeColor = "purple";

  fixedRect.debug = true;
  
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);
  console.log(is_touching(movingRect, fixedRect));
  if(is_touching(movingRect, gameObject3)){
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green"; 
  } else {
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "purple";
  }

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  drawSprites();

}
