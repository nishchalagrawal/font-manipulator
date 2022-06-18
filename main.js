function setup(){
    video = createCapture(VIDEO);
    video.size("550,500");
    canvas = createCanvas("550,550");
    canvas.position(550,160);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('gotposes',gotresults);
}
function draw(){
   background = ("#32a852");
}

function modelLoaded()
{
    console.log('poseNet is instalized');
}

function gotposes(){
if(results.length>0)
 console.log("results");
}