const msg = document.getElementById('message');
const randomNum = getRandomNumber();

function getRandomNumber(){
    return Math.floor(Math.random*100)+1; // get between 1 to 100
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition(); // will give a object

// start recogntion
recognition.start();

// speak result
recognition.addEventListener('result',onSpeak)

// get user speak

function onSpeak(e){
    const msg = e.results[0][0].transcript // this gets the input from the user
    console.log(msg)
}