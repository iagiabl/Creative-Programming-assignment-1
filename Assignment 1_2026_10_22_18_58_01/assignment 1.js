//Author; Abigail Roche
//Date; 30th of September 2026
//Purpose; Assignment 1 (due before Halloween week)

let bg;
var x=675;
var X=50;
var y=355;
var isOverRectangle;

async function setup() 
{
  createCanvas(800, 800);
  bg = await loadImage('/assets/starrnight.png')
}

function draw() 
{
  image(bg,0,0,1200,900)
  //background(225);
  
  house();
  car();
  moon();
  spaceship();
  cow();
  alien();

  fill(255);
  text(`${mouseX},${mouseY}`,20,20)
}

function house()
{
  //grass
  fill(173,228,30);
  rect(0,700,800,100);
  fill(225);
  rect(300,500,200,200);
  //chimley and roof
  fill(150,25,40);
  rect(325,425,25,75);
  fill(175,25,40);
  triangle(300,500,500,500,400,400);
  //door
  fill(150,25,40);
  rect(425,625,50,75);
  fill(0);
  circle(435,665,5);
  //windows
  if ((mouseX >= 325 && mouseX <= 325+50 && mouseY >= 525 && mouseY <=525+50) || //left window
     (mouseX >= 425 && mouseX <= 425+50 && mouseY >= 525 && mouseY <=525+50) || //right window
     (mouseX >= 325 && mouseX <= 325+50 && mouseY >= 625 && mouseY <=625+50) || //bottom window
     (mouseX >= 425 && mouseX <= 425+50 && mouseY >= 625 && mouseY <= 625+75)) //door
  {
    fill(random(255),random(255),random(255));
    cursor(HAND);
  }
  else
  {
    fill(173,216,240);
  }
    //left window
  rect(325,525,50,50);
    //right window
  rect(425,525,50,50);
    //bottom window
  rect(325,625,50,50);
    //door window
  circle(450,645,25);

  line(450,633,450,657);
  line(438,645,463,645);
  line(350,525,350,575);
  line(450,525,450,575);
  line(325,550,375,550);
  line(425,550,475,550);
  line(350,625,350,675);
  line(325,650,375,650);
}

function car()
{
  //back wheels
  fill(0);
  circle(583,687,25);
  circle(648,687,25);
  //main body of car
  fill(221,25,10);
  rect(545,625,125,60);
  //front wheels
  fill(50);
  circle(575,687,25);
  circle(640,687,25);
  //front of car
  fill(202,25,10);
  rect(665,650,25,35);
  //widows of car + windsheild
  if ((mouseX >= 600 && mouseX <= 600+25 && mouseY >= 635 && mouseY <=635+35) ||
     (mouseX >= 565 && mouseX <= 565+25 && mouseY >= 635 && mouseY <=635+35) ||
     (mouseX >= 645 && mouseX <= 645+30 && mouseY >= 625 && mouseY <=625+25))
  {
    fill(255,250,192);
    cursor(HAND);
  }
  else
  {
    fill(173,216,240)
  }
  rect(600,635,25,35);
  rect(565,635,25,35);
  rect(645,625,30,25);
  //wippers
  line(645,650,660,635);
  line(655,650,670,635);
}

function moon()
{
  fill(255,255,229);
  ellipse(x,150,150,150);
  strokeWeight(0);
  fill(255,245,213);
  ellipse(x,110,40,30);
  ellipse(x-20,180,60,50);
  circle(x+50,150,25);
  circle(x-50,135,10);
  circle(x+35,190,15);
  x=x+0.75;
    if((x-75) >= 800)
        {
            x= 10;//resetting
        }
}

function cow()
{
  fill(250);
  //legs
    //back
  rect(120,640,10,40);
  rect(135,630,10,35);
  fill(80,19,13);
  rect(120,675,10,5);
  rect(135,665,10,5);
    //front
  fill(250);
  rect(170,610,10,40);
  rect(185,600,10,35);
  fill(80,19,13);
  rect(170,645,10,5);
  rect(185,635,10,5);
  //tail
  fill(0);
  line(120,600,100,650);
  triangle(100,650,85,665,75,655);
  //utter
  fill(255,211,225);
  circle(145,623,30);
  //body
  fill(250);
  quad(120,600,195,550,195,600,120,650);
  //head + ears + neck
  fill(0);
  triangle(195,550,220,550,195,600);
  triangle(205,550,205,540,215,550);
  fill(255,211,225);
  circle(235,570,20);
  fill(250);
  rect(205,550,30,30);
  //spots
    //back
  fill(0);
  triangle(120,600,155,577,130,615);
  triangle(130,615,137,625,140,600);
  triangle(131,617,136.5,626,126,619);
    //front
  triangle(173,565,195,550,195,580);
  triangle(160,623,170,595,175,612);
  triangle(180,585,165,580,175,612);
  triangle(190,595,176,592,175,610);
  //eye
  circle(225,560,5);
}

  function spaceship()
{
  strokeWeight(1)
  //main body
  fill(200);
  circle(175,375,85);
  let overDome = dist(mouseX,mouseY,175,375) <= 75 / 2;
  if(overDome)
  {
    fill(102,255,40);
    cursor(HAND);
  }
  else{
    fill(173,216,240)
    cursor(HAND);
  }
  circle(175,375,75);
  //light
  strokeWeight(0);
  fill(255,255,200)
  quad(125,400,225,400,275,700,75,700);
  fill(255,255,173);
  quad(140,400,210,400,260,700,90,700);
  fill(255,231,164)
  circle(175,420,45);
  //silver quad
  strokeWeight(1);
  fill(200);
  quad(105,415,245,415,230,435,120,435);
  quad(125,375,225,375,250,425,100,425);
  //circles on silver quad
  fill(255,222,152);
  circle(175,400,25);
  circle(215,400,25);
  circle(135,400,25);
  fill(173,216,240);
  circle(135,400,10);
  circle(175,400,10);
  circle(215,400,10);
}

function alien() //click on the canvas to be able to move him
{
  fill(0,255,0);
  //alien
    //legs + arms
      //legs
  fill(0,255,0);
  rect(X+4,y+55,4,30);
  rect(X-7,y+55,4,30);
      //arms
  quad(X-7,y+30,X-7,y+40,X-17,y+53,X-19,y+51);
  quad(X+7,y+30,X+7,y+40,X+17,y+53,X+19,y+51);
  rect(X-2,y,5,40);
  rect(X-7,y+30,15,25);
  //og greenCircle
  ellipse(X,y,35,50);
  //eyes
  fill(0);
  ellipse(X-7,y,10,20);
  ellipse(X+7,y,10,20);
  ellipse(X,y+15,5,10);
  
  
  if (keyIsDown(LEFT_ARROW))  X -= 2;
  if (keyIsDown(RIGHT_ARROW)) X += 2;
  if (keyIsDown(UP_ARROW))    y -= 2;
  if (keyIsDown(DOWN_ARROW))  y += 2;

  {
    let w = width - 50
    let h = height - 50

    X = constrain(X,20,w);
    y = constrain(y,25,h);
  }
}

//aditional pieces
  //i had to change the code for the using the arrow keys, because the original one on moodle wasnt working for me.
  //greenCircle is in another section as it was getting confusing with all the different variables
  // - function cow()
  // - lights on the car + spaceship
  //green dot turned into an alien