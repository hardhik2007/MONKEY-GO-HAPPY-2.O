var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground,invisibleGround;
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 500);
 monkey=createSprite(80,315,20,20)
  monkey.addAnimation('moving',monkey_running);
  monkey.scale=0.1;
  
  
 ground=createSprite(400,350,900,10);
 ground.velocityx=-4;
ground.x=ground.width/2;
  console.log(ground.x);
  
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();

  invisibleGround = createSprite(400,360,400,10);
  invisibleGround.visible = false;
  
  score = 0;
  survivalTime = 0;

}


function draw() {
  background(225);
 
  stroke("white");
  textSize(20);
  fill("white")
  text("score:" + score,500,50);
  
  
  stroke("black");
   textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
   text("survivalTime " + survivalTime,100,50);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -12;
  
  
   
    }
  
   monkey.velocityY = monkey.velocityY + 0.8
   monkey.collide(ground);
  
  
  
  obstacle();
fruit();
  drawSprites();

  
}
 function fruit(){
   
     if (frameCount % 80 === 0) {
    var fruit = createSprite(600,120,40,10);
    fruit.y = Math.round(random(120,200));
    fruit.addImage('fruit',bananaImage);
 fruit.scale=0.1;
        fruit.velocityX = -3;
   fruit.lifetime=300;
   FoodGroup.add(fruit);
 }

 }
function obstacle(){
   if (frameCount % 100 === 0){
   var obstacle = createSprite(600,350,10,40);
   obstacle.velocityX = -(6 + score/100);
   
     
    obstacle.addImage('obstacles',obstacleImage) 
     obstacle.scale=0.1;
     obstacle.lifetime=300;
     obstacleGroup.add(obstacle);
     
   }
  
}
