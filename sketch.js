//I have added the fi;le P5play.js in index.html you can check in index.html

//I have commented the lines of code that I have added to make it work below. Hope you understand

var bananaimg;
var obs

var obstaclegroup;
var obstacleimg;
var backgroud;//variable to load background image
var score;
var playerrunning;
var playerrunning1;
var backgr;// variable for background sprite
var invi 
var food
var foodgroup

function preload(){
backgroud = loadImage("jungle.jpg");//loading image
  playerrunning1=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimg= loadImage("banana.png")
  obstacleimg=loadImage("stone.png")
  foodgroup= new Group;
  obstaclegroup= new Group
  
}


function setup() {
  createCanvas(500, 200);
  //creating backgr sprite
  backgr=createSprite(0,0,800,400);
  score =0
 
   invi=createSprite(300,200,600,20)
  invi.visible=false 
  //adding image stored in backgroud to backgra
  backgr.addImage(backgroud);
  playerrunning = createSprite(150,150,20,20)
  playerrunning.addAnimation("playerrunning1",playerrunning1);
  playerrunning.scale=0.1
 
}

function draw() {
  background(220);
  
  playerrunning.collide(invi )
  drawSprites();
  food1();
  obstacle();
  if(foodgroup.isTouching(playerrunning))
 { foodgroup.destroyEach(); score = score + 2; }
    obstacle();
  if(obstaclegroup.isTouching(playerrunning))
 { obstaclegroup.destroyEach();
 playerrunning.scale  = 0.1; 
}

  backgr.velocityX=-5;
  textSize(20)
  stroke("white")
  fill("white")
  text("Score : "+score,400,20)
  switch(score){
    case 10:playerrunning.scale=0.12
      break;
          case 20:playerrunning.scale=0.14
      break;  
      case 30:playerrunning.scale=0.16
      break;   
      case 40:playerrunning.scale=0.18
      break;
      default:break;
         }
  if(backgr.x < 0)
    {
      backgr.x=backgr.width/2;
    }
   if(keyDown("space")&& playerrunning.y>150)
    {
      playerrunning.velocityY=-12
    }
       playerrunning.velocityY=playerrunning.velocityY+0.5
}
function food1 (){
  if (World.frameCount % 80 ===0) {
  food =createSprite(500,100,20,20) 
    food.y=random(75,125)
    food.addImage(bananaimg)
    food.scale=0.03;
    food.velocityX=-5
    foodgroup=new Group();
    foodgroup.add(food)
    
  
  }  
 if(foodgroup.isTouching(playerrunning ))
 { foodgroup.destroyEach(); score = score + 2; } 
}
function obstacle() {
  if (World.frameCount % 300===0      ) {
  obs = createSprite(500,174,20,20)
  obs .addImage(obstacleimg)
  obs . scale = 0.15  
    obs.velocityX=-5 
    
   obstaclegroup=createGroup();
    obstaclegroup.add(obs)
    
  }
  
}
