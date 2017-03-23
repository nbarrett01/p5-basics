var newWidth = 50;
var newHeight = 50;


//setup function excutes once
function setup(){
    createCanvas(600,400);
    background(66,244,80);
}

//draw function loops forever
function draw(){
    //background(50);
    if(mouseIsPressed){
        noStroke();
        fill(227,234,11);
        ellipse(mouseX,mouseY,newWidth,newHeight);
    }
    
}