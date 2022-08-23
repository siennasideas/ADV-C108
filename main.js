function startClassification ()
{
    navigator.mediaDevices.getUserMedia({ audio: true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);
}
function modelReady(){
    classifier.classify( gotResults);
}

function getResults(error, results) {
    if (error) {
        console.error(error);   
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
   
        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+ " %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r
    }
}