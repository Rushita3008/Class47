var bg,bgImg;
var hunter, hunterImg;
var zombie, zombieImg;
var zombieGroup;
var bullet = 50;
var bulletGroup, bulletImg;
//var player, shooterImg, shooter_shooting;


function preload(){
  
 // shooterImg = loadImage("assets/shooter_2.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")
  hunterImg = loadImage("assets/hunter.png")
  zombieImg = loadImage("assets/zombie1.png")
  //bulletImg - loadImage ("assets/bullet.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight); 

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
hunter = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 hunter.addImage(hunterImg)
   hunter.scale = 0.3
   hunter.setCollider("rectangle", 0, 0, 300, 1300);
   hunter.debug = true;



  zombieGroup = new Group();
  bulletGroup = new Group();


}

function draw() {
  background(0); 
  text(mouseX+","+mouseY, 30, 40)

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  hunter.y = hunter.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 hunter.y = hunter.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
//if(keyWentDown("space")){
 
 // player.addImage(shooter_shooting)
 
//}

//player goes back to original standing image once we stop pressing the space bar
//else if(keyWentUp("space")){
//  player.addImage(shooterImg)
//}

if(keyDown("SPACE")){
  bullet = createSprite(displayWidth-980, hunter.y-200, 20, 20)
  //bullet.addImage("Shoot", bulletImg);
  bullet.velocityX = 20
  bulletGroup.add(bullet);
  hunter.depth = bullet.depth;
  hunter.depth = hunter.depth+2
  bullet = bullet-1
}

if(zombieGroup.isTouching(bulletGroup)){
  zombieGroup.destroyEach()
  bulletGroup.destroyEach()

}
enemy();
drawSprites();

}

function enemy(){
  if (frameCount % 80 === 0) {
    zombie = createSprite(random(1500, 1540), random(100, 500), 40, 40);
    zombie.addImage(zombieImg);
    zombie.scale = 0.2;
    zombie.velocityX = -3;
    zombie.lifetime = 400;
    zombieGroup.add(zombie);
    zombie.setCollider("rectangle", 0, 0, 400, 800)
    zombie.debug = true;
  }  
}
