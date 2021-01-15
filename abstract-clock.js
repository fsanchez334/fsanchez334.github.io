function setup() {
	createCanvas(800,600,); // make an HTML canvas element width x height pixels
}

function draw() {
    let s = second();
    let m = minute();
    let h = hour();
  
    if(h < 12){
      background('blue');
      //Represents the morning
    }
  
    if(h >= 12 && h <= 18){
      background('yellow');
      //Represents the afternoon
    }
  
    if(h > 18){
      background('maroon');
      //Represents the evening
    }
  
    //Here is whre I am going to map the numbers;
    let s_improved = map(s, 0, 60, 0, 5);
    let m_improved = map(m, 0, 60, 0, 12);
    let h_improved = h; //This was the only number I couldn't really map strategically because it messed up the for loops and the number of boxes
  
    if(h > 12){
      h_improved = h -12;
    }
  
    
    fill('orange');
    line(0, 0, 225, 200);
    line(800, 600, 300, 450);
    line(800, 0, 300, 300);
    line(0,600, 225, 500);
    rect(225, 200, 240, 300);
  
    ellipse(350, 350, 60, 60);
    
    //The following code will be used to calculate the number of hours to create the appropriate anount of boxes
  //EG: 1 -> 1 box 
    for(let i = 0; i < h_improved; i++){
      fill('red');
      translate(15, 0);
      rect(210, 200, 25, 25);
    }
  
  //The following will be used to get the amount of minutes to convert them into circles
  for(let j = 0; j < m_improved; j++){
      fill('#0f0');
      translate(20, 0);
      ellipse(220, 480, 15, 30);
  }
  textAlign(CENTER);
  textSize(20);
  text('Minute:' + m, 280, 525);

  
  //The following code will be used to make the ellipse in the center move across the center with each interval
  for(let z = 0; z < s_improved; z++){
   stroke('neon');
   fill('black');
   translate(13* s_improved, 0);
   ellipse(0, 350, 30, 30); 
  }   
}
