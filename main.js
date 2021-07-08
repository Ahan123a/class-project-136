



function setup() {
    canvas = createCanvas(480,340);
    canvas.center();
}

function draw()
{
    image(video,0,0,480,340);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object"
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true
    video.loop();
    video.speed(1);
    video.volume(0)
}