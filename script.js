let songindex=0;
let masterplay=document.getElementById("masterplay")
let myprogressbar=document.getElementById('myProgressBar')
let audioElement=new Audio("songs/1.mp3")
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songItemsPlay=Array.from(document.getElementsByClassName('songItemPlay'));


//
let songs=[
  {songName:"Bapu Zimidar", filePath:"songs/1.mp3",coverPath:"covers/1.jpeg" },
  {songName:"Bhool Bhulaiya", filePath:"songs/2.mp3",coverPath:"covers/2.jpg" },
  {songName:"Chale Aana", filePath:"songs/3.mp3",coverPath:"covers/3.jpg" },
  {songName:"Chand Sifarish", filePath:"songs/4.mp3",coverPath:"covers/4.jpg" },
  {songName:"Dhindora Baje re", filePath:"songs/5.mp3",coverPath:"covers/5.jpg" },
  {songName:"Hawayein", filePath:"songs/6.mp3",coverPath:"covers/6.jpeg" },
  {songName:"Falak Tak", filePath:"songs/7.mp3",coverPath:"covers/7.jpg" },
  {songName:"Heer Ranjhana", filePath:"songs/8.mp3",coverPath:"covers/8.jpg" },
  {songName:"Kabil hoon", filePath:"songs/9.mp3",coverPath:"covers/9.jpg" },
  {songName:"Quafirana", filePath:"songs/10.mp3",coverPath:"covers/10.jpg" },
]

songItems.forEach((element,i)=>{

element.getElementsByTagName('img')[0].src=songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

const makeAllPlays=()=>{
    songItemsPlay.forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

    
}
songItemsPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
     songindex=parseInt(e.target.id)
     
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioElement.src=`songs/${songindex}.mp3`
     audioElement.currentTime=0;
     audioElement.play();
     
     masterSongName.innerText=songs[songindex-1].songName;
     gif.style.opacity=1;
     masterSongName.style.opacity=1;
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')

    })
})


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
        masterSongName.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0;
        masterSongName.style.opacity=1;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;

})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=  myprogressbar.value * audioElement.duration/100;
})

document.getElementById("next").addEventListener('click',()=>{
    if(songindex>9){
        songindex=1;
    }
    else{
        songindex +=1;

    }
    audioElement.src=`songs/${songindex}.mp3`
    audioElement.play();
    masterSongName.innerText=songs[songindex-1].songName;
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex>1){
        songindex -=1
    }
    else{
        songindex=1;
    }
    audioElement.src=`songs/${songindex}.mp3`;
    audioElement.play();
    masterSongName.innerText=songs[songindex-1].songName;
    
})