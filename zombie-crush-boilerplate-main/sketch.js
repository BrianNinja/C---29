const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height -5, width, 20, "black");
  wallr = new Base(width - 100, height /2 + 20 ,500,100,"white");
  wallL = new Base(100, height /2 + 20 ,500,100,"white");
  bridge = new Bridge(15,{x:300,y:height/2})
  jointPoint = new Base(width - 350,height/2,40,20,"white");
  
  Matter.Composite.add(bridge.body,jointPoint);
  jointlink = new Link(bridge,jointPoint);

  for (var i = 0; i < 6; i++ ){
    var x = random(width/2 -100,width/2 +100);
    var y = random(10,150);
    var stone = new Stone(x,y,60,60,"red");
    stones.push(stone)
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  wallr.display();
  wallL.display();
  bridge.show();
  jointPoint.display();
  for (var stone of stones){
    stone.display();
  }
}
