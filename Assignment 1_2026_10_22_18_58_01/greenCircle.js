var x = 215;
var y = 45;

function setup()
{
  createCanvas(500,500);
}

function draw()
{
  background(225);
  greenCircle();
}

function greenCircle()
{
  fill(0,255,0)
  circle(x,y,50);

  if (keyIsDown(LEFT_ARROW))  x -= 2;
  if (keyIsDown(RIGHT_ARROW)) x += 2;
  if (keyIsDown(UP_ARROW))    y -= 2;
  if (keyIsDown(DOWN_ARROW))  y += 2;
}