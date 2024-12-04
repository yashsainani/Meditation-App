const hamburgur = document.querySelector('.hamburgur')
const ham = document.querySelector('.ham')
const ansDispay = document.querySelector('.ansDispay')
const mic = document.querySelector('.mic')
const responce = document.querySelector('.responce')
const chnger = document.querySelector('.chnger')

let flag = true, flag1 = true, flag2 = true;


function displayMess(){
    ansDispay.innerHTML="";
    let evil = `
        <div class="greet">
                    <p>Greetings</p>
                    <li>Hi</li>
                    <li>Hello</li>
                    <li>Hey</li>
                    <li>What's up?</li>
                    <li>Good morning</li>
                    <li>Good afternoon</li>
                </div>
                <div class="commands">
                    <p>Commands</p>
                    <li>Open Google</li>
                    <li>Open Youtube</li>
                    <li>Open Twitter</li>
                    <li>Open Facebook</li>
                </div>
                <div class="question">
                    <p>Questions</p>
                    <li>What is U Matter?</li>
                    <li>What is the time?</li>
                    <li>How are you?</li>
                    <li>Who are you?</li>
                </div>
                <div class="compliment">
                    <p>Compliments</p>
                    <li>You're amazing</li>
                    <li>You're funny</li>
                    <li>You're awesome</li>
                    <li>You're awesome</li>
                    <li>You're wonderful</li>
                </div>
    `
    ansDispay.innerHTML += evil;
    flag2=true;
}
window.addEventListener('load',displayMess)

let service = true;
ham.addEventListener('click',()=>{
    let one = document.querySelector(".one")
    let two = document.querySelector(".two")
    let three = document.querySelector(".three")
    if(service){
        hamburgur.style.transition = 'transform 1s ease';
        two.style.display="none"
        one.style.transition = 'transform 1s ease';
        three.style.transition = 'transform 1s ease';
        one.style.transform= "translateY(4px) rotate(-45deg)";
        three.style.transform= "translateY(-6px) rotate(45deg)";
        hamburgur.style.display="flex";
        service = false;
    }
    else {
        two.style.display="flex"
        one.style.transform = ' translateX(0)';
        three.style.transform = 'translateX(0)';
        hamburgur.style.display="none";
        service = true;
    }
})

function speak(text , mess) {

    // let div1 = document.createElement('div')
    // div1.className="que"
    // let para1 = document.createElement('p')
    // para1.innerText= mess;
    // div1.appendChild(para1)
    // let div2 = document.createElement('div')
    // div2.className='ans'
    // let para2 = document.createElement('p')
    // para2.innerText=text;
    // div2.appendChild(para2);
    // responce.appendChild(div1)
    // responce.appendChild(div2)
    // console.log(responce);
    
    let make = `
        <div class="responce">
            <div class="que">
                <p>${mess}</p>
            </div>
            <div class="ans">
                <p>${text}</p>
            </div>
        </div>
    `
    ansDispay.innerHTML += make;

    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;

    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak);
    mic.style.backgroundColor="#FF3B3B";
}

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult =(event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    takeCommand(transcript);
}

function takeCommand(message) {
    if(message.includes("hello") || message.includes("hey")) {
        speak("hello dost ! btao kya madad chahie" , message);
    }
    else if(message.includes("who are you") || message.includes("hu")) {
        speak("mai jiva hu ! ab bata bhi do kya madad chahie" , message);
    }

    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute :"numeric"})
        speak(time , message);
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month :"short"})
        speak(date , message);
    }
    else if(message.includes("commands")){
       displayMess();
    }

    else{
        speak("Akash chutiya hai" , message)
    }
}

mic.addEventListener('click',()=>{
    if(flag2){
        let greet = document.querySelector('.greet')
        let commands = document.querySelector('.commands')
        let question = document.querySelector('.question')
        let compliment = document.querySelector('.compliment')
        ansDispay.removeChild(greet)
        ansDispay.removeChild(commands)
        ansDispay.removeChild(question)
        ansDispay.removeChild(compliment)
        flag2 = false;
    }
    chnger.innerText = 'Say "Show all commands." to see commands.';
    recognition.start();
    mic.style.backgroundColor="#39C81F";
    setTimeout(()=>{
        mic.style.backgroundColor="#FF3B3B";
    },7000)

})


let loading  = document.querySelector('#loading');
let body  = document.querySelector('body');
window.addEventListener("load",()=>{
    loading.style.display = "flex";
    body.style.overflowY = "hidden";
    setTimeout(() => {
        loading.style.display = "none";
        body.style.overflow = "unset";
    }, Math.floor(Math.random() * 1000)+3000);
})