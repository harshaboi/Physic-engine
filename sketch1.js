var ball;
var res;
//namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var small_engine, world;
var ground, object;

function setup() {
  createCanvas(400,400);
  
  small_engine = Engine.create();
  world = small_engine.world;
  res = random(0.5,8);
  var options =
  {
    isStatic : true
  }
  var ball_options =
  {
    isStatic : false,
    restitution : res
  }
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(200,390,400,20, options); 
  World.add(world,ground);
  console.log(res);
  
}

function draw() {
  background("black");
  Engine.update(small_engine);

ellipseMode(RADIUS);
ellipse(ball.position.x, ball.position.y, 20, 20);
rectMode(CENTER);
rect(ground.position.x, ground.position.y, 400, 20);
  drawSprites();

}

//function rectMode(){
//  rect.x = rect.x-25;
//  rect.y = rect.y-25;
//}
