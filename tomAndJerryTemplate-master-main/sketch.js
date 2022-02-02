
var cat = {

  x: 870,
  y: 600

}
var catAni, catimg;
var gard, gardimg;
var mouse, mouseAni, mouseAni2;

function preload() {
    
    catAni = loadAnimation("images/cat1.png");
    catimg = loadAnimation("images/cat2.png","images/cat3.png");
    catImg2 = loadImage("images/cat4.png");
    mouseAni = loadAnimation("images/mouse4.png");
    mouseAni2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    gardimg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    
    gard = createSprite(550, 350);
    gard.addImage(gardimg);

    cat = createSprite(cat.x, cat.y, 600);
    cat.addAnimation("gatosentado", catAni);
    cat.scale = 0.2;


    mouse = createSprite(200, 600);
    mouse.addAnimation("mouse:(",mouseAni);
    mouse.scale = 0.2;

    
}

function draw() {

    background(255);
    
  if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
    
    cat.addAnimation("sla", catImg2);
    cat.changeAnimation("sla");
    cat.velocityX = 0;
    cat.x = 320;

    mouse.changeAnimation("mouse:(");


  }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW) {

    mouse.addAnimation("rato:)", mouseAni2);
    mouse.changeAnimation("rato:)");
    mouse.scale = 0.2;

    cat.velocityX = -5;
    cat.addAnimation("gato:)2", catimg);
    cat.changeAnimation("gato:)2");

  }


}
