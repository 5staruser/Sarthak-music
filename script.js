console.log("Welcome to Sarthak music");
// Intialize The variables
let index=1;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let songitem=Array.from(document.getElementsByClassName("songitem"));
let bottomsongname=document.getElementById("bottomsongname")
let songs=[{songname:"Warriyo - Mortals [NCS Release]",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
{songname:"Cielo - Huma-Huma",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
{songname:"DEAF KEV - Invincible [NCS Release]-320k",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
{songname:"Different Heaven & EH!DE - My Heart [NCS Release]",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
{songname:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
{songname:"Rabba - Salam-e-Ishq",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
{songname:"Sakhiyaan - Salam-e-Ishq",filepath:"songs/7.mp3",coverpath:"covers/7.jpg"},
{songname:"Bhula Dena - Salam-e-Ishq",filepath:"songs/8.mp3",coverpath:"covers/8.jpg"},
{songname:"Tumhari Kasam - Salam-e-Ishq",filepath:"songs/9.mp3",coverpath:"covers/9.jpg"},
{songname:"Na Jaana - Salam-e-Ishq",filepath:"songs/10.mp3",coverpath:"covers/10.jpg"}]
// Handle play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity=0
    }
})
// Listen to Events
audioElement.addEventListener("timeupdate",()=>{
    // Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myprogressbar.value=progress
})
myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100
})
songitem.forEach((element,i) => {
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
});
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle")
        element.classList.add("fa-play-circle")
})
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener("click",(e)=>{
            index=parseInt(e.target.id)
            makeAllPlays();
            e.target.classList.remove("fa-play-circle")
            e.target.classList.add("fa-pause-circle")
            audioElement.src=`songs/${index+1}.mp3`
            audioElement.currentTime=0
            audioElement.play()
            gif.style.opacity=1
            bottomsongname.innerText=songs[index].songname
            masterPlay.classList.remove("fa-play-circle")
            masterPlay.classList.add("fa-pause-circle")
    })
})
document.getElementById("next").addEventListener("click",()=>{
    if(index>=9){
        index=0
    }
    else{
        index=index+1
    }
    audioElement.src=`songs/${index+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity=1
    bottomsongname.innerText=songs[index].songname
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})
document.getElementById("previous").addEventListener("click",()=>{
    if(index<=0){
        index=9
    }
    else{
        index=index-1
    }
    audioElement.src=`songs/${index+1}.mp3`
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity=1
    bottomsongname.innerText=songs[index].songname
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
})