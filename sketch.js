var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(600, 200, 50, 80);
  fixedrect.shapeColor='green';
  movingrect=createSprite(200,300,80,50);
  movingrect.shapeColor='green';
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  subt=movingrect.x-fixedrect.x;
  leftsubt=fixedrect.x-movingrect.x;
  addt=movingrect.width/2+fixedrect.width/2;
  if(subt===addt||leftsubt===addt){
    fixedrect.shapeColor='red';
    movingrect.shapeColor='red';   
  }
  else{
    fixedrect.shapeColor='green';
    movingrect.shapeColor='green';    
  }

  drawSprites();
}