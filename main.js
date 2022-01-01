var speech = window.webkitSpeechRecognition;
var recognition = new speech();
function start1() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak1();
        Webcam.attach(camera);

    }
}
function speak1(){
    var synth=window.speechSynthesis;
    speakdata="taking selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
}
camera=document.getElementById("camera");
Webcam.set({
width:360,
height:250,
image_format:"png",
png_quality:90
})