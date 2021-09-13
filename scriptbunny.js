var wormGroup;

function preload(){
    bunnyImg = loadImage("Photos/BunnySprite.png");
    backImg = loadImage("Photos/Background.jpg");
    snakeImg = loadImage("Photos/Snake.png");
    carrotImg = loadImage("Photos/Carrot.png");
  }

function setup() {
    createCanvas(1350,650);
    edges = createEdgeSprites();
    canvas = createSprite(675,325);
    canvas.scale = 2.5;
    canvas.addImage(backImg);
    wormGroup = new Group();
    bunny = createSprite(50,600,30,30);
    bunny.scale = 0.008;
    bunny.addImage(bunnyImg);
    carrot = createSprite(1200,100,50,50);
    carrot.scale = 0.2;
    carrot.addImage(carrotImg);
    brick1 = createSprite(300,250,100,30);
    brick2 = createSprite(450,250,100,30);
    brick3 = createSprite(600,250,100,30);
    brick4 = createSprite(750,250,100,30);
    brick5 = createSprite(400,330,100,30);
    brick6 = createSprite(550,330,100,30);
    brick7 = createSprite(700,330,100,30);
    brick8 = createSprite(850,330,100,30);
    brick9 = createSprite(900,250,100,30);
    brick10 = createSprite(1050,250,100,30);
    brick11 = createSprite(1200,250,100,30);
    brick12 = createSprite(1350,250,100,30);
    brick13 = createSprite(150,250,100,30);
    brick14 = createSprite(1,250,100,30);
    brick15 = createSprite(1000,330,100,30);
    brick16 = createSprite(1150,330,100,30);
    brick17 = createSprite(1300,330,100,30);
    brick18 = createSprite(250,330,100,30);
    brick19 = createSprite(100,330,100,30);
    bunny.shapeColor = "pink";
    carrot.shapeColor = "orange";
    brick1.shapeColor = "red";
    brick2.shapeColor = "red";
    brick3.shapeColor = "red";
    brick4.shapeColor = "red";
    brick5.shapeColor = "red";
    brick6.shapeColor = "red";
    brick7.shapeColor = "red";
    brick8.shapeColor = "red";
    brick9.shapeColor = "red";
    brick10.shapeColor = "red";
    brick11.shapeColor = "red";
    brick12.shapeColor = "red";
    brick13.shapeColor = "red";
    brick14.shapeColor = "red";
    brick15.shapeColor = "red";
    brick16.shapeColor = "red";
    brick17.shapeColor = "red";
    brick18.shapeColor = "red";
    brick19.shapeColor = "red";
}    
function draw() {
    background("green"); 
    bunny.bounceOff(edges[0]);
    bunny.bounceOff(edges[1]);
    bunny.bounceOff(edges[2]);
    bunny.bounceOff(edges[3]);
    if(keyDown("left")){
        bunny.x = bunny.x - 3;
    }
    if(keyDown("right")){
        bunny.x = bunny.x + 3;
    }
    if(keyDown("up")){
        bunny.y = bunny.y - 3;
    }
    if(keyDown("down")){
        bunny.y = bunny.y + 3;
    }
    if(bunny.isTouching(carrot)){
        text("You Win",200,200);        
    }
    if(bunny.isTouching(brick1)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick2)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick3)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick4)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick5)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick6)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick7)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick8)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick9)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick10)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick11)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick12)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick13)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick14)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick15)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick16)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick17)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick18)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    if(bunny.isTouching(brick19)){
        bunny.x = 50;
        bunny.y = 600;
        text("You Lose",200,200);
    }
    generateWorms();
    for(var i = 0;i < (wormGroup).length;i++) {
        var temp = (wormGroup).get(i);
        if(bunny.isTouching(temp)){
            bunny.x = 50;
            bunny.y = 600;
        }
      }
    drawSprites();
  }
  function generateWorms(){
    if(frameCount % 100 === 0){
        var worm = createSprite(1,100,40,5);
        worm.scale = 0.05;
        worm.addImage(snakeImg);
        worm.shapeColor = "yellow";
        worm.velocityX = random(4,8);
        wormGroup.add(worm);
      }
  }
  