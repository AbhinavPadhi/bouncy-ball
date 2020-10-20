// nameSpacing 
// var score = 0;
// constants 
// universe

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


// planet - >physics  engine
// AngryBirds world, engine 
var world, engine; 
var object;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  var prop = {
    isStatic: true
  }
  object = Bodies.rectangle(400,380,800,20,prop);

  var ball_prop = {
    restitution: 10
  }

  ball = Bodies.circle(100,100,50,ball_prop)

  World.add(world, object);
  World.add(world, ball);

}

function draw() {
  background(0); // rgb - black
  Engine.update(engine);
  rectMode(CENTER);
  rect(400,200,50,50);
  rect(object.position.x, object.position.y,800,20);
  circle(ball.position.x,ball.position.y,ball.radius)

}


