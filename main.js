song="";

function preload(){
    song="music.mp3";

}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,detectar);
    poseNet.on("pose",iniciar);

}
function detectar(){
    console.log("poseNet activo");
}
function iniciar(){

}
function draw(){
    image(video,0,0,600,600)
}