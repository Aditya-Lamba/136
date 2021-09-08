video = "";
status = "";
objects = [];
function preload()
{
    video = createVideo('video');
    video.hide();
}

function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}