const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

//e=engine, w=world
var e,w;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  e=Engine.create();
  w=e.world;

var opt={
  isStatic:true
}

  ground = Bodies.rectangle(200,380,450,20,opt);
  World.add(w,ground);

  var optt={
    restitution:1
  }

  ball = Bodies.circle(200,50,20,optt);
  World.add(w,ball);

}

function draw() {
  background(0); 
  
Engine.update(e);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,450,20);

  ellipse(ball.position.x,ball.position.y,40);
  drawSprites();
}