var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  createCanvas(400,400);
  
  // mover o fundo
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //criar sprite do coelho
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function createApples(){
  apple=createSprite(random(50, 350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY = 7;
  apple.lifetime = 150;
}
function createOreange(){
  orange=createSprite(random(50, 350), 40, 10, 10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocityY = 7;
  orange.lifetime = 150;
}
function createRed(){
  red=createSprite(random(50, 350), 40, 10, 10);
  red.addImage(redImg);
  red.scale=0.06;
  red.velocityY = 7;
  red.lifetime = 150;
}

function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.velocityX=(mouseX-rabbit.x)/7;
  
  var wasd=Math.round(random (1,3));
  if(frameCount % 30 == 0){
    if (wasd==1){
      createApples();
    }else if (wasd==2){
      createOreange();
    }else{
      createRed();
    }
  }

  drawSprites();
}
