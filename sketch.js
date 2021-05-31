// creating the variables
var p1;
var level1, level2, level3;
var pad1, pad2, pad3, pad4;

function setup() {

  createCanvas(800, 600);

  // creating the player
  p1 = createSprite(37, 355, 15, 15);
  p1.shapeColor = 'green';

  // creating the level bars 
  level1 = createSprite(width/2, 100, width + 40, 10); // top
  level1.shapeColor = 'blue';
  level2 = createSprite(width/2, 200, width + 40, 10); // middle
  level2.shapeColor = 'blue';
  level3 = createSprite(width/2, 300, width + 40, 10); // bottom 
  level3.shapeColor = 'blue';

  // creating the pads for changing between levels
  pad1 = createSprite(790, 355, 20, 100) // level 1 right
  pad1.shapeColor = 'yellow';
  pad2 = createSprite(790, 250, 20, 90) // level 2 right
  pad2.shapeColor = 'yellow';
  pad3 = createSprite(790, 150, 20, 90) // level 3 right
  pad3.shapeColor = 'yellow';
  pad4 = createSprite(10, 250, 20, 90); // level 2 left
  pad4.shapeColor = 'yellow';
  pad5 = createSprite(10, 150, 20, 90); // level 3 left
  pad5.shapeColor = 'yellow';
  pad6 = createSprite(10, 50, 20, 90); // level 4 left
  pad6.shapeColor = 'yellow';

  // obstacles of level1
  up_and_down1 = createSprite(325, 355, 10, 35);
  up_and_down1.shapeColor = 'red'
  up_and_down1.velocityX = 0;
  up_and_down1.velocityY = 7;
  up_and_down2 = createSprite(525, 355, 10, 35)
  up_and_down2.shapeColor = 'red'
  up_and_down2.velocityX = 0;
  up_and_down2.velocityY = -7;
  up_and_down3 = createSprite(725, 355, 10, 35)
  up_and_down3.shapeColor = 'red'
  up_and_down3.velocityX = 0;
  up_and_down3.velocityY = 7;
  up_and_down4 = createSprite(125, 355, 10, 35)
  up_and_down4.shapeColor = 'red'
  up_and_down4.velocityX = 0;
  up_and_down4.velocityY = -7;

  // obstacles of level 2
  ball1 = createSprite(width/2 - 200, 250, 20, 20);
  ball1.shapeColor = 'red';
  ball1.velocityX = 10
  ball1.velocityY = 10
  ball2 = createSprite(width/2, 250, 20, 20);
  ball2.shapeColor = 'red';
  ball2.velocityX = 10
  ball2.velocityY = 10
  ball3 = createSprite(width/2 + 200, 250, 20, 20);
  ball3.shapeColor = 'red';
  ball3.velocityX = 10
  ball3.velocityY = 10

  // obstacles of level 4
  horizontal_bar1 = createSprite(width/2, 135, width - 200, 5); // top
  horizontal_bar1.shapeColor = 'red';
  horizontal_bar1.velocityX = -8;
  horizontal_bar2 = createSprite(width/2, 165, width - 200, 5); // bottom
  horizontal_bar2.shapeColor = 'red';
  horizontal_bar2.velocityX = 8;

  // obstacles of level 4
  bar1 = createSprite(225, 55, 10, 35);
  bar1.shapeColor = 'red'
  bar1.velocityX = 0;
  bar1.velocityY = 7;
  bar2 = createSprite(325, 55, 10, 35)
  bar2.shapeColor = 'red'
  bar2.velocityX = 0;
  bar2.velocityY = -7;
  bar3 = createSprite(425, 55, 10, 35)
  bar3.shapeColor = 'red'
  bar3.velocityX = 0;
  bar3.velocityY = 7;
  bar4 = createSprite(125, 55, 10, 35)
  bar4.shapeColor = 'red'
  bar4.velocityX = 0;
  bar4.velocityY = -7;
  bar5 = createSprite(525, 55, 10, 35)
  bar5.shapeColor = 'red'
  bar5.velocityX = 0;
  bar5.velocityY = 7;
  bar6 = createSprite(625, 55, 10, 35)
  bar6.shapeColor = 'red'
  bar6.velocityX = 0;
  bar6.velocityY = -7;
  bar7 = createSprite(725, 55, 10, 35)
  bar7.shapeColor = 'red'
  bar7.velocityX = 0;
  bar7.velocityY = 7;

  // creating the finish line 
  finish = createSprite(790, 47, 20, 90);
  finish.shapeColor = 'lightblue';

  // creating the bottomBar
  bottomBar = createSprite(width/2, 400, width, 10);
  bottomBar.shapeColor = 'blue';

  // creating the scroes and the gameState
  Lives = 5;
  gameState = 0;
}

function draw() {
  background(0);  

  if(gameState === 0){
    player();
    obstacles();
    drawSprites();
    fill('yellow');
    textSize(40);
    text('Lives left :- ' + Lives, width/2 - 110, 500);
  }

  if(gameState === 0 && Lives === 0){
    gameState = 1
  }

  if(gameState === 1){
    fill('yellow');
    textSize(40);
    text('You lost !!!',width/2 - 160, height/2);
  }

  if(p1.isTouching(finish)){
    gameState = 2
  }

  if(gameState === 2){
    fill('yellow');
    textSize(40);
    text('You Won !!!',width/2 - 160, height/2);
  }

}

function player(){

  // stationary movement
  p1.velocityX = 0;
  p1.velocityY = 0;

  // for up
  if(keyDown(UP_ARROW)){
    p1.velocityY = -10
  }

  // for down
  if(keyDown(DOWN_ARROW)){
    p1.velocityY = 10
  }

  // for right
  if(keyDown(RIGHT_ARROW)){
    p1.velocityX = 10
  }

  // for left 
  if(keyDown(LEFT_ARROW)){
    p1.velocityX = -10
  }

  // bouncing from the edges and the respawn condition
  edges = createEdgeSprites();

  if(p1.isTouching(edges)){
    p1.x = 25;
    p1.y = 375
  }

  if(p1.isTouching(level1) || p1.isTouching(level2) || p1.isTouching(level3) || p1.isTouching(bottomBar)){
    p1.x = 25;
    p1.y = 375
  }

  if(p1.isTouching(up_and_down1) || p1.isTouching(up_and_down2) || p1.isTouching(up_and_down3) || 
      p1.isTouching(up_and_down4)){
    p1.x = 25;
    p1.y = 375
    Lives = Lives - 1;
  }

  if(p1.isTouching(ball1) || p1.isTouching(ball2) || p1.isTouching(ball3)){
    p1.x = 25;
    p1.y = 375
    Lives = Lives - 1;
  }

  if(p1.isTouching(horizontal_bar1) || p1.isTouching(horizontal_bar2)){
    p1.x = 25;
    p1.y = 375
    Lives = Lives - 1;
  }

  if(p1.isTouching(bar1) || p1.isTouching(bar2) || p1.isTouching(bar3) || p1.isTouching(bar4)
      || p1.isTouching(bar5) || p1.isTouching(bar6) || p1.isTouching(bar7)){
          p1.x = 25;
          p1.y = 375
          Lives = Lives - 1;
      }

  p1.bounceOff(edges[0]);
  p1.bounceOff(edges[1]);
  p1.bounceOff(edges[2]);
  p1.bounceOff(edges[3]);

  // spawning condition if p1 touches the pads
  if(p1.isTouching(pad1)){
    p1.x = 25;
    p1.y = 255
  }
  if(p1.isTouching(pad2)){
    p1.x = 25;
    p1.y = 155
  }
  if(p1.isTouching(pad3)){
    p1.x = 25;
    p1.y = 55
  }  

}

function obstacles(){

  // creating the edge sprites
  edges = createEdgeSprites();

 // bounceOff of all the obs of level1
  up_and_down1.bounceOff(bottomBar);
  up_and_down1.bounceOff(level3);
  up_and_down2.bounceOff(bottomBar);
  up_and_down2.bounceOff(level3);
  up_and_down3.bounceOff(bottomBar);
  up_and_down3.bounceOff(level3);
  up_and_down4.bounceOff(bottomBar);
  up_and_down4.bounceOff(level3);

  // bounceOff of all the ball in level2
  ball1.bounceOff(level2);
  ball1.bounceOff(level3);
  ball1.bounceOff(pad2);
  ball1.bounceOff(pad4);
  ball2.bounceOff(level2);
  ball2.bounceOff(level3);
  ball2.bounceOff(pad2);
  ball2.bounceOff(pad4);
  ball3.bounceOff(level2);
  ball3.bounceOff(level3);
  ball3.bounceOff(pad2);
  ball3.bounceOff(pad4);

  // bounceOff of all the horizontal bars of level3
  horizontal_bar1.bounceOff(pad3);
  horizontal_bar1.bounceOff(pad5);
  horizontal_bar2.bounceOff(pad3);
  horizontal_bar2.bounceOff(pad5);

  // bouncingness of all the bars of level 4
  bar1.bounceOff(edges[2]);
  bar1.bounceOff(level1);
  bar2.bounceOff(edges[2]);
  bar2.bounceOff(level1);
  bar3.bounceOff(edges[2]);
  bar3.bounceOff(level1);
  bar4.bounceOff(edges[2]);
  bar4.bounceOff(level1);
  bar5.bounceOff(edges[2]);
  bar5.bounceOff(level1);
  bar6.bounceOff(edges[2]);
  bar6.bounceOff(level1);
  bar7.bounceOff(edges[2]);
  bar7.bounceOff(level1);
}