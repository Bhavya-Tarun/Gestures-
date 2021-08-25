Webcam.set({
    width:350,
    height:300,
    image_format: "png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach( '#camera');
function takeSnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='captured_image' src='"+data_url+"'/>"
    });
}
console.log('ml5 version:', ml5.version);

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pNwZ2HaE-/model.json', modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("name").innerHTML = "Object: "+results[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy: "+results[0].confidence.toFixed(3);
    }
}
    

