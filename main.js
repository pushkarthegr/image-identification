function preload(){
  document.getElementById("buttonT").click();
}
function setup() {
  canvas = createCanvas(300, 300);
  x = screen.width;
  x1 = x/2;
  x2 = x1-150;
  canvas.position(x2,400);
  classifier = ml5.imageClassifier("MobileNet",loaded);
  video = createCapture(VIDEO);
  video.hide();
}
function loaded(){
  console.log("model loaded");
}
function results(error,result){
  if(error){
    console.error(error);
  }else{
    document.getElementById("object").innerHTML = result[0].label;
    accurate = result[0].confidence;
    final = Math.round(accurate*100);
    document.getElementById("accuracy").innerHTML = final+"%";
  }
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,results);
}



