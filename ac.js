status="";
img="";
objects=[];

objectDetector="";

function preload(){
   img= loadImage('AC.jpg');
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
    image(img, 0, 0, 400, 400);

     if(status!=""){
  
        for(i=0; i<objects.length; i++){
           percent= Math.floor(objects[i].confidence*100);
           document.getElementById("status").innerHTML="Status: Objects detected";

           fill("red");
           stroke('red');

        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        document.getElementById("detect").innerHTML="There was 2 object and cocossd deteted 1 objet ";

        }
     }
}

function modelLoaded(){
    console.log("model loaded");
    status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects= results;
    }
}
