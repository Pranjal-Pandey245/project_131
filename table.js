var Status="";
img="";
objects=[];
objectDetector="";

function preload(){
   img= loadImage('table.jpg');
}

function setup(){
    canvas= createCanvas(400,400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw(){
     image(img, 0, 0, 400, 400);

     if(Status!=""){

        for(i=0; i<objects.length; i++){
           percent=floor(objects[i].confidence*100);
           document.getElementById("status").innerHTML="Status: Objects detected";

           fill("red");
           

        text(objects[i].label + " " + percent + "%",objects[i].x-448  , objects[i].y-0 );
        noFill();
        stroke('red');
        rect(objects[i].x-448  , objects[i].y-448, objects[i].width-1850, objects[i].height-890);

        document.getElementById("detect").innerHTML="There were 3 object and cocossd deteted 1 objet ";
        }}
}

function modelLoaded(){
    console.log("model loaded");
    Status= true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects= results;
    }
}


