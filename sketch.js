
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground, back;
var di1, di2, di3, di4, di5;
var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11;
var p1a, p2a, p3a, p4a, p5a, p6a, p7a, p8a, p9a, p10a, p11a;
var p1b, p2b, p3b, p4b, p5b, p6b, p7b, p8b, p9b, p10b, p11b;
var p1c, p2c, p3c, p4c, p5c, p6c, p7c, p8c, p9c, p10c, p11c;
var p1d, p2d, p3d, p4d, p5d, p6d, p7d, p8d, p9d, p10d, p11d;
var p1e, p2e, p3e, p4e, p5e, p6e, p7e, p8e, p9e, p10e, p11e;
var p1f, p2f, p3f, p4f, p5f, p6f, p7f, p8f, p9f, p10f, p11f;
var p1g, p2g, p3g, p4g, p5g, p6g, p7g, p8g, p9g, p10g, p11g;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function preload()
{
   back = loadImage("bg.jpg");
}

function setup() {
  createCanvas(500, 820);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(250,814,510,20);
  //di1 = new Division(250,670,10,300);
  //di2 = new Division(130,670,10,300);
  //di3 = new Division(5,670,10,300);
  //di4 = new Division(370,670,10,300);
  //di5 = new Division(495,670,10,300);

  p1 = new Plinko(250,100,15);
  p2 = new Plinko(200,100,15);
  p3 = new Plinko(150,100,15);
  p4 = new Plinko(100,100,15);
  p5 = new Plinko(50,100,15);
  p6 = new Plinko(300,100,15);
  p7 = new Plinko(350,100,15);
  p8 = new Plinko(400,100,15);
  p9 = new Plinko(450,100,15);
  p10 = new Plinko(0,100,15);
  p11 = new Plinko(500,100,15);

  p1a = new Plinko(250,150,15);
  p2a = new Plinko(200,150,15);
  p3a = new Plinko(150,150,15);
  p4a = new Plinko(100,150,15);
  p5a = new Plinko(50,150,15);
  p6a = new Plinko(300,150,15);
  p7a = new Plinko(350,150,15);
  p8a = new Plinko(400,150,15);
  p9a = new Plinko(450,150,15);
  p10a = new Plinko(0,150,15);
  p11a = new Plinko(500,150,15);

  p1b = new Plinko(250,200,15);
  p2b = new Plinko(200,200,15);
  p3b = new Plinko(150,200,15);
  p4b = new Plinko(100,200,15);
  p5b = new Plinko(50,200,15);
  p6b = new Plinko(300,200,15);
  p7b = new Plinko(350,200,15);
  p8b = new Plinko(400,200,15);
  p9b = new Plinko(450,200,15);
  p10b = new Plinko(0,200,15);
  p11b = new Plinko(500,200,15);

  p1c = new Plinko(250,250,15);
  p2c = new Plinko(200,250,15);
  p3c = new Plinko(150,250,15);
  p4c = new Plinko(100,250,15);
  p5c = new Plinko(50,250,15);
  p6c = new Plinko(300,250,15);
  p7c = new Plinko(350,250,15);
  p8c = new Plinko(400,250,15);
  p9c = new Plinko(450,250,15);
  p10c = new Plinko(0,250,15);
  p11c = new Plinko(500,250,15);

  p1d = new Plinko(250,300,15);
  p2d = new Plinko(200,300,15);
  p3d = new Plinko(150,300,15);
  p4d = new Plinko(100,300,15);
  p5d = new Plinko(50,300,15);
  p6d = new Plinko(300,300,15);
  p7d = new Plinko(350,300,15);
  p8d = new Plinko(400,300,15);
  p9d = new Plinko(450,300,15);
  p10d = new Plinko(0,300,15);
  p11d = new Plinko(500,300,15);

  p1e = new Plinko(250,350,15);
  p2e = new Plinko(200,350,15);
  p3e = new Plinko(150,350,15);
  p4e = new Plinko(100,350,15);
  p5e = new Plinko(50,350,15);
  p6e = new Plinko(300,350,15);
  p7e = new Plinko(350,350,15);
  p8e = new Plinko(400,350,15);
  p9e = new Plinko(450,350,15);
  p10e = new Plinko(0,350,15);
  p11e = new Plinko(500,350,15);

  p1f = new Plinko(250,400,15);
  p2f = new Plinko(200,400,15);
  p3f = new Plinko(150,400,15);
  p4f = new Plinko(100,400,15);
  p5f = new Plinko(50,400,15);
  p6f = new Plinko(300,400,15);
  p7f = new Plinko(350,400,15);
  p8f = new Plinko(400,400,15);
  p9f = new Plinko(450,400,15);
  p10f = new Plinko(0,400,15);
  p11f = new Plinko(500,400,15);

  p1g = new Plinko(250,450,15);
  p2g = new Plinko(200,450,15);
  p3g = new Plinko(150,450,15);
  p4g = new Plinko(100,450,15);
  p5g = new Plinko(50,450,15);
  p6g = new Plinko(300,450,15);
  p7g = new Plinko(350,450,15);
  p8g = new Plinko(400,450,15);
  p9g = new Plinko(450,450,15);
  p10g = new Plinko(0,450,15);
  p11g = new Plinko(500,450,15);
  
	Engine.run(engine);
  
}


function draw() {
  background(back);
  rectMode(CENTER);
  Engine.update(engine);
  for (var k=0; k<=width; k=k+82.5){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight).display());
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(240,260),10,10));
    lifetime = 100;
  }
  for (var j=0; j<particles.length;j++){
    particles[j].display();
  }

  /*for (var i=40; i<=width; i=i+50){
    plinkos.push(new Plinko(i,75,10));
  }
  for (var i=0; i<particles.length;i++){
    plinkos[i].display();
  }*/

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();

  p1a.display();
  p2a.display();
  p3a.display();
  p4a.display();
  p5a.display();
  p6a.display();
  p7a.display();
  p8a.display();
  p9a.display();
  p10a.display();
  p11a.display();

  p1b.display();
  p2b.display();
  p3b.display();
  p4b.display();
  p5b.display();
  p6b.display();
  p7b.display();
  p8b.display();
  p9b.display();
  p10b.display();
  p11b.display();

  p1c.display();
  p2c.display();
  p3c.display();
  p4c.display();
  p5c.display();
  p6c.display();
  p7c.display();
  p8c.display();
  p9c.display();
  p10c.display();
  p11c.display();

  p1d.display();
  p2d.display();
  p3d.display();
  p4d.display();
  p5d.display();
  p6d.display();
  p7d.display();
  p8d.display();
  p9d.display();
  p10d.display();
  p11d.display();

  p1e.display();
  p2e.display();
  p3e.display();
  p4e.display();
  p5e.display();
  p6e.display();
  p7e.display();
  p8e.display();
  p9e.display();
  p10e.display();
  p11e.display();

  p1f.display();
  p2f.display();
  p3f.display();
  p4f.display();
  p5f.display();
  p6f.display();
  p7f.display();
  p8f.display();
  p9f.display();
  p10f.display();
  p11f.display();

  p1g.display();
  p2g.display();
  p3g.display();
  p4g.display();
  p5g.display();
  p6g.display();
  p7g.display();
  p8g.display();
  p9g.display();
  p10g.display();
  p11g.display();
  ground.display();
  drawSprites();
 
}



