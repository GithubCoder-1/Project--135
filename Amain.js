status1 = "";
inputed_object_name = [];

function preload()
{

}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    inputed_object_name = document.getElementById("object_name_input");

}

function modelLoaded()
{
    console.log("Model Loaded");
    status1 = true;
}

function draw()
{
    image(video, 0, 0, 380, 380);
}