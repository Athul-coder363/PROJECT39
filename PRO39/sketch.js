var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
 
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage= loadImage("arrow0.png");
  roadImg = loadImage("road.jpg")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  //assigning memories and giving images
backGround = createSprite(displayWidth/2,displayHeight,500,500);
backGround.addImage(roadImg);
backGround.scale = 2;



bow = createSprite(1000,250,20,21);
bow.addImage(bowImage)

score = 0
  
  redB = new Group();
  blueB = new Group();
  pinkB = new Group();
  
  arrowGroup = new Group();
}

function draw() {
  




  
  //random positions for balloon
var selectballoon = Math.round(random(1,3));
  
  if (frameCount%40 === 0){
    if (selectballoon === 1){
      redBalloon();
    }
  if (selectballoon === 2){
    blueBalloon();
  }
    if (selectballoon === 3)
      pinkBalloon();
  }
  
  
  bow.y = World.mouseY;
  camera.position.x = width/2;
  camera.position.y = bow.y;

  
//shoot arrows when space is pressed
  if (mouseIsPressed){
    createArrow();
  }
  if(arrowGroup.isTouching(pinkB)||arrowGroup.isTouching(blueB)||arrowGroup.isTouching(redB)){
    score = score+1;
    blueB.destroyEach();
    pinkB.destroyEach();
    redB.destroyEach();
    arrowGroup.destroyEach();
  }
  
  if ( blueB<0||redB<0||pinkB<0){
    score = score-1
  }
drawSprites();
  text ("Score:"+ score, 950,camera.position.y-50,40,40)
 
}
//creating arrows
function createArrow(){

  arrow = createSprite(bow.x,bow.y,5,50);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.lifetime = 150;
  arrowGroup.add(arrow)
  
  
  
}
//creating red balloons and assigning lifetime
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  return red
  
}


//creating blue balloons and assigning lifetime
function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
  return blue;
}

//creating pink balloons and assigning lifetime

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
  return pink;
}

function camera(){
  camera.position.x = bow.x
  camera.position.y = bow.y
}