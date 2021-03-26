
var bg, backgroundImg;
var ironman,man;
var rockImg,rockGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman = loadImage("images/iron.png")
  rockImg = loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  man =createSprite(100,500)
  man.addImage(ironman)
  man.scale=0.5
  ground = createSprite(200,585,400,10);
  ground.visible =false;
  man.setCollider("rectangle",10,10,300,300);
  rockGroup=new Group();
  
 
}

function draw() {
     if (keyDown("up")){
     man.velocityY = -10;}
    if (keyDown("left")){
      man.x = man.x -7;
    }
    if (keyDown("right")){
      man.x = man.x+7;}

    
  man.velocityY = man.velocityY + 0.5
  
  man.collide(ground)
  bg.velocityY=-10;
  if (bg.y<200){
    bg.y=bg.width/4;}

    generaterock ();

for (var i = 0; i <rockGroup.length; i++){
      var temp = rockGroup.get(i);
      if(temp.isTouching(man)){
        man.collide(temp);
      }
    
  }
    
    drawSprites();
   
}
function generaterock(){
  if ( frameCount % 70 ===0){
    var rock = createSprite(120,120,40,10);
    rock.x=random(50,450);
    rock.addImage(rockImg);
    rock.scale =1;
    rock.velocityY= 5;
    rockGroup.add(rock);
    
  }

}
