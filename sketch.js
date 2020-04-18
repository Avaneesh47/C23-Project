function setup() {
  createCanvas(800,400);
}

function draw() {
  background("turquoise");  

  var pillar1 = createSprite(93,275,40,250);
  pillar1.shapeColor = "black";
  
  var pillar2 = createSprite(707,275,40,250);
  pillar2.shapeColor = "black";

  var middle = createSprite(400,300,570,200);
  middle.shapeColor = "black"

  strokeWeight(5);
  stroke("black");
  fill(255);

  triangle(73,145,113,145,93,95);
  triangle(687,145,727,145,707,95);

  ellipse(185,125,144,144);
  ellipse(329,125,144,144);
  ellipse(473,125,144,144);
  ellipse(617,125,144,144);

  drawSprites();
}