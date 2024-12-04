const hamburgur = document.querySelector('.hamburgur')
const ham = document.querySelector('.ham')

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


let talk = document.querySelector('.chat')

talk.addEventListener('click', function(){
    setTimeout(()=>{
    // talk.setAttribute('')
     this.setAttribute('href','./talkToHope/talk.html')
     window.location.href = this.getAttribute('href');
    },3000)

})




const play = document.querySelectorAll('.play');
let playFlag = true, toggleFlag = true;
let timeChk = 10, minutes = 10, seconds = 0;
let timerId;

play.forEach(ele => {
    ele.addEventListener('click', () => {
        let pSrc = ele.parentNode.previousElementSibling.src;
        let vSrc = pSrc.replace("scenePhotos", "sceneVideos");
        vSrc = vSrc.replace("jpg", "mp4");
        let aSrc = pSrc.replace("scenePhotos", "sceneAudio");
        aSrc = aSrc.replace("jpg", "mp3");

        const div = document.createElement('div');
        div.classList.add('scene2');

        div.innerHTML = `
            <i class="fa-solid fa-xmark close"></i>
            <video src="${vSrc}" loop></video>
            <audio src="${aSrc}" loop></audio>
            <div class="buttons">
                <i class="fa-solid fa-angle-left left"></i>
                <div class="times-options">
                    <i class="fa-solid fa-play vPlayer"></i>
                    <p class="time two">2 Minutes</p>
                    <p class="time five">5 Minutes</p>
                    <p class="time ten">10 Minutes</p>
                    <p id="time-selected">10:00</p>
                </div>
            </div>
        `;

        document.body.appendChild(div);
    });
});

document.body.addEventListener('click', (event) => {
    // close kerne ki functionality
    if (event.target.classList.contains('close')) {
        timeChk = 10, minutes = 10, seconds = 0;
        document.getElementById('time-selected').innerHTML = '10:00';
        clearInterval(timerId);
        document.querySelector('.scene2').remove();
    }

    // timer option per click kerna per time set kerne ke liye
    if (event.target.classList.contains('two')) {
        timeChk = 2, minutes = 2, seconds = 0;
        document.getElementById('time-selected').innerHTML = '02:00';
    }
    if (event.target.classList.contains('five')) {
        timeChk = 5, minutes = 5, seconds = 0;
        document.getElementById('time-selected').innerHTML = '05:00';
    }
    if (event.target.classList.contains('ten')) {
        timeChk = 10, minutes = 10, seconds = 0;
        document.getElementById('time-selected').innerHTML = '10:00';
    }

    // video & audio ko play-pause toggle kerne ki functionality
    if (event.target.classList.contains('vPlayer')) {
        let audio = event.target.parentNode.parentNode.previousElementSibling;
        let video = audio.previousElementSibling;
        let playBtn = document.querySelector('.vPlayer');
        let timeSelected = document.getElementById('time-selected');

        if (playFlag) {
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
            audio.play();
            video.play();
            playFlag = false;
            timerId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timerId);
                        timeSelected.innerHTML = `${timeChk < 10 ? '0' + timeChk : timeChk}:00`;
                        minutes = timeChk;
                        seconds = 0;
                        playBtn.classList.remove('fa-pause');
                        playBtn.classList.add('fa-play');
                        audio.pause();
                        video.pause();
                        playFlag = true;
                    }
                    else {
                        seconds = 59;
                        minutes --;
                        timeSelected.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds}`;
                    }
                }
                else {
                    seconds --;
                    timeSelected.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
                }
            }, 1000);
        }
        else {
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
            audio.pause();
            video.pause();
            clearInterval(timerId);
            playFlag = true;
        }
    }
    if (event.target.classList.contains('left')) {
        if (toggleFlag) {
            document.querySelector('.times-options').style.left = "-60rem";
            document.querySelector('.left').style.rotate = "180deg"
            toggleFlag = false;
        }
        else {
            document.querySelector('.times-options').style.left = "4rem";
            document.querySelector('.left').style.rotate = "0deg"
            toggleFlag = true;
        }
    }
});


let loading  = document.querySelector('#loading');
let body  = document.querySelector('body');
window.addEventListener("load",()=>{
    loading.style.display = "flex";
    body.style.overflowY = "hidden";
    setTimeout(() => {
        loading.style.display = "none";
        body.style.overflow = "unset";
    }, Math.floor(Math.random() * 1000)+4000);
})