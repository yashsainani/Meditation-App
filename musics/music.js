let allMusicCards = document.querySelectorAll(".card");
let song = document.querySelector(".song");
let musicContainer = document.querySelector(".card-container");
let musicFilter = document.getElementById("music");
let pauseBtn = document.querySelector(".pause");
let muteBtn = document.getElementById("volume_icon");
let replayBtn = document.querySelector(".replayBtn");
let crossBtn = document.querySelector(".crossBtn");
let volumeContainer = document.querySelector("volume-container");
let volumeSlider = document.getElementById("volume");
let volumeText = document.getElementById("volume_show");
let bottomMusicControlPanel = document.querySelector(".music-control");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
let mobileFilterBtns = document.querySelectorAll(".options li")

bottomMusicControlPanel.style.display = "none";

function handleMusicPlay() {
    function playSong() {
        musicContainer.classList.add("play");
        song.play();
    }

    allMusicCards.forEach((musicCard) => {
        musicCard.addEventListener("click", function () {
            const soundSrc = this.getAttribute("data-sound");
            song.src = soundSrc;
            playSong();
            bottomMusicControlPanel.style.display = "block";
            bottomMusicControlPanel.classList.add("fade-up")
            bottomMusicControlPanel.style.position = "fixed";
            bottomMusicControlPanel.style.bottom = "0";
            // bottomMusicControlPanel.style.left = "0";
        });
    });
}

let isPause = false;
function pauseSong() {
    if (!isPause) {
        // means gaana chal rha
        isPause = true;
        musicContainer.classList.remove("play");
        song.pause();
        pauseBtn.classList.remove("fa-pause");
        pauseBtn.classList.add("fa-play");
        pauseBtn.style.color = "green";
    } else {
        isPause = false;
        musicContainer.classList.add("play");
        song.play();
        pauseBtn.classList.remove("fa-play");
        pauseBtn.classList.add("fa-pause");
        pauseBtn.style.color = "red";
    }
}

function replaySong() {
    song.currentTime = 0;
    song.play();
}

function cardFilter() {
    const selectedCategory = musicFilter.value;
    allMusicCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-name");

        if (selectedCategory === "all" || selectedCategory === cardCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function handleMute() {
    if (song.muted) {
        //agr mute hai volup add, mute btn hatao
        song.muted = false;
        muteBtn.classList.remove("fa-volume-mute");
        muteBtn.classList.add("fa-volume-up");
    } else {
        // mute nhi hai, music chal rha
        song.muted = true;
        muteBtn.classList.remove("fa-volume-up");
        muteBtn.classList.add("fa-volume-mute");
    }
}

function stopMusic(){
    song.pause();
    bottomMusicControlPanel.style.display = "none";
    bottomMusicControlPanel.classList.remove("fade-up");
    bottomMusicControlPanel.classList.add("fade-down")


}

function volKamZyada() {
    volumeValue = volumeSlider.value;
    volumeText.innerText = volumeValue < 10 ? "0" + volumeValue : volumeValue;
    // volumeText.innerText = volumeSlider.value; // wo volume dikhane ke liye screen pe
    song.volume = volumeValue / 100; // bcz volume sirf 0 to 1 tk vary krta
    // console.log(`Volume: ${song.volume}`);
    // bc EDGE browser pe volume kam zyda nhi ho rha saala
}

//gaana bajega, progress bar aage bdhega
function songSliderProgress() {
    const duration = song.duration; //gaane ka pura duration
    const currTime = song.currentTime; // abhi gaana kahn pe hai
    const progressPercent = (currTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

// wo progress bar pe jahn click krenge woha se gaana bjega bc
function setGaanaProgress(e) {
    const containerWidth = progressContainer.clientWidth; // container ka total width naap reh
    // console.log(containerWidth);
    const XAsixClick = e.offsetX; // x direction me kahn user ne click kiya
    const duration = song.duration;
    song.currentTime = (XAsixClick / containerWidth) * duration; // pta nhi kya hi backchod wala mats hai
}

handleMusicPlay();

musicFilter.addEventListener("change", cardFilter);
pauseBtn.addEventListener("click", pauseSong);
replayBtn.addEventListener("click", replaySong);
muteBtn.addEventListener("click", handleMute);
crossBtn.addEventListener("click", stopMusic);
volumeSlider.addEventListener("input", volKamZyada);
// volume.addEventListener("change", () => {
//     song.volume = volumeSlider.value / 100;
//   });

song.addEventListener("timeupdate", songSliderProgress);
progressContainer.addEventListener("click", setGaanaProgress);

mobileFilterBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        let selectedCategory = btn.id;

        allMusicCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-name");
            if(selectedCategory == "all" || selectedCategory == cardCategory){
                card.style.display = "block";
            }else{
                card.style.display = "none"
            }
        })
    })
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
