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
    writeMessage(msg)
    checkNumber(msg)
}
// write what user speaks
function writeMessage(msg){
    msg.innerHTML = `
    <div> you said   </div>
    <span class="box">${msg} </span>
    `

}

// check if its a number

function checkNumber(msg){
    const num =+msg; // convverrts to number
    if(Number.isNaN(num)){
        msg.innerHTML +=`<div> that is not a valid number </div>`
        return
    }

    // check for range
    if(num >100 || num<1){
       msg.innerHTML += `<div>Number must be between 1 and 100 </div>`
       return;
    }

    if(num === randomNum){
        document.body.innerHTML =
            `<h2> congrats you guessed the right number! <br><br>
              it was ${num}</h2>
              <button class="play-again" id="play-again">Play Again</button>
`
    }else if(num>randomNum){
        msg.innerHTML += `<div>Go lower </div>` // will loop through everything to make it easier to show user already aguessed higehr
    }else {
        msg.innerHTML+=`<div>Go lower </div>` // will loop through this to ma
    }
}

// when the service ends
recognition.addEventListener('end',()=>recognition.start()) // this will start the game again

document.body.addEventListener('click',(e)=>{
    if(e.target.id == 'play-again'){
       window.location.reload();

    }
})