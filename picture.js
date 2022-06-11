status="";
img="";

function preload(){
   img= loadImage('picture.jpg');
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
     image(img, 0, 0, 400, 400);
}

function modelLoaded(){
    console.log("model loaded");
    status= true;
    objectDetector.on(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
