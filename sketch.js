var fixedRect, movingRect


function setup() {
  createCanvas(1000,800);
  fixedRect = createSprite(400, 100, 50, 50);
  movingRect = createSprite(400, 500, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect.shaperColor = "blue";
  fixedRect.debug = true;
  movingRect.debug = true;
  
}

function draw() {
  background("red");  
  movingRect.x = world.mouseX
  movingRect.y = world.mouseY
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      movingRect.shapeColor =  'red';
      fixedRect.shapeColor = "red";

}

else{
  movingRect.shapeColor = "green"
  fixedRect.shapeColor = "green"
}
  drawsprites();
}
