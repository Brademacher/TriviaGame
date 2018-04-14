var correct = 0;
var startingTime = 60;
var counter = setInterval(startTime, 1000);

//variable to give them a limited amount of time
var timer = setTimeout(check, 1000 * 60);

//Functions to check answers for value
function check() {
    var stop = clearInterval(counter);

    correct += parseInt(getRadioValue("question1")) || 0;
    correct += parseInt(getRadioValue("question2")) || 0;
    correct += parseInt(getRadioValue("question3")) || 0;
    correct += parseInt(getRadioValue("question4")) || 0;
    correct += parseInt(getRadioValue("question5")) || 0;
    correct += parseInt(getRadioValue("question6")) || 0;
    correct += parseInt(getRadioValue("question7")) || 0;
    correct += parseInt(getRadioValue("question8")) || 0;
    correct += parseInt(getRadioValue("question9")) || 0;
    correct += parseInt(getRadioValue("question10")) || 0;

    console.log("You got " + correct + " out of 10 correct.")
    clearTimeout(timer);
    
    document.getElementById("timer").innerHTML = ("You got " + correct + " out of 10 correct.")
}

function startTime() {
    
    var replaceTimer = document.getElementById("timer").innerHTML = parseInt(startingTime) - parseInt(counter++);

    if (replaceTimer == 0) {
        check();
        document.getElementById("timer").innerHTML = ("You got " + correct + " out of 10 correct.")
    }
}

startTime();
function getRadioValue(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }

}
