


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

}
function draw() {
  background(255,255,255); 
  translate(200, 200);
  rotate(-90);

  let hours = hour();
  let minutes = minute();
  let seconds = second();
  


  
  

 
  stroke(238, 3, 1);
  strokeWeight(8);
  noFill();

  let hourAngle = map(hours, 0, 12, 0, 360);
  arc(0, 0, 290, 290, 0, hourAngle);

  stroke(60, 249, 21);
  strokeWeight(7);
  noFill();

  let minuteAngle = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, minuteAngle);

  stroke(80, 37, 248);
  strokeWeight(6);
  noFill();

  let secondAngle = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 310, 310, 0,  secondAngle);

  push();
  rotate(hourAngle);
  stroke(238, 3, 1);
  strokeWeight(8);
  line(0, 0, 65, 65);
  pop();

  push();
  rotate(minuteAngle);
  stroke(60, 249, 21);
  strokeWeight(7);
  line(0, 0, 100, 100);
  pop();

  push();
  rotate(secondAngle);
  stroke(80, 37, 248);
  strokeWeight(6);
  line(0, 0, 100, 100);
  pop();
  

  fill(0);
  noStroke();
  text(hours + ":" + minutes + ":" + seconds, 20, 200);

}

