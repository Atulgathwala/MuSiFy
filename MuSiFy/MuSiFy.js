console.log("hii");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('playbutton');
let myProgressBar = document.getElementById('seekBAR');
let gif = document.getElementById('playinggif');
let masterSongName = document.getElementById('marquee');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let stime=document.getElementById('stime');
let etime=document.getElementById('etime');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
let card8 = document.getElementById('card8');
let card9 = document.getElementById('card9');
let card10 = document.getElementById('card10');



let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/3.jpg"},
    {songName: "Bebe_Di_Pasand_-_Jordan_Sandhu", filePath: "songs/2.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dil_-_Ninja_-_128Kbps", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Ed Sheeran - Perfect ......", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Eminem - Love The Way You Lie", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Eminem - Love The Way You Lie ft.", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "songs/Jhaanjar (Video) Honeymoon (ਹਨੀਮੂਨ) ", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "songs/Mehbooba_Mehbooba_(Remix)", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]









// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.scroll;
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
        gif.style.opacity = 1;
        masterSongName.style.opacity = 1;
        document.getElementById('disc').style.animationPlayState="running";
    }
    else{
        audioElement.pause();
        document.getElementById('playbutton').src = 'play-button-100 backnone.png'; 
        // document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
        gif.style.opacity = 0;
        masterSongName.style.opacity = 0;
        
document.getElementById('disc').style.animationPlayState="paused";
   
    
    }
})


// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})




// 



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
})




// card1 click function

// diljit
document.getElementById('card1').addEventListener('click', ()=>{
   
    audioElement.src = `songs/diljit.mp3`;
    masterSongName.innerText ="Diljit Dosanjh - G.O.A.T. (Official Music)";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})


// waheguru
document.getElementById('card2').addEventListener('click', ()=>{
   
    audioElement.src = `songs/waheguru.mp3`;
    masterSongName.innerText ="Sukh Tera Ditha Leheeai _ सुख तेरा दिता लहिए ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})

// ParmishVerma
document.getElementById('card3').addEventListener('click', ()=>{
   
    audioElement.src = `songs/parmish.mp3`;
    masterSongName.innerText ="Parmish Verma - Ohi Munde (Aam Jehe Munde 2) ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})

// ninza
document.getElementById('card4').addEventListener('click', ()=>{
   
    audioElement.src = `songs/3.mp3`;
    masterSongName.innerText ="NInza Dil mera bhi karde ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})


// Subh
document.getElementById('card5').addEventListener('click', ()=>{
   
    audioElement.src = `songs/subh.mp3`;
    masterSongName.innerText ="songs/Shubh - Elevated (Official Music Video)";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})

// sardar
document.getElementById('card5').addEventListener('click', ()=>{
   
    audioElement.src = `songs/sardar.mp3`;
    masterSongName.innerText ="Mere Wala Sardar (Full Song)  _ Jugraj Sandhu ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})


// sardar
document.getElementById('card6').addEventListener('click', ()=>{
   
    audioElement.src = `songs/sardar.mp3`;
    masterSongName.innerText ="Mere Wala Sardar (Full Song)  _ Jugraj Sandhu ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})


// kantara
document.getElementById('card7').addEventListener('click', ()=>{
   
    audioElement.src = `songs/kantara.mp3`;
    masterSongName.innerText ="songs/Kantara Bgm Ringtone __ ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})


// hoist
document.getElementById('card8').addEventListener('click', ()=>{
   
    audioElement.src = `songs/kantara.mp3`;
    masterSongName.innerText ="Hoist the Colours _ The Bass Singers ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})

// perfect
document.getElementById('card9').addEventListener('click', ()=>{
   
    audioElement.src = `songs/perfect.mp3`;
    masterSongName.innerText ="Ed Sheeran - Perfect (Official Music ) ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})

// animal
document.getElementById('card10').addEventListener('click', ()=>{
   
    audioElement.src = `songs/animal.mp3`;
    masterSongName.innerText ="songs/ANIMAL_SAARI DUNIYA JALAA DENGE(Audio)_Ranbir kapoor ";
    audioElement.currentTime = 0;
    audioElement.play();
    document.getElementById('playbutton').src = 'icons8-pause-button-96 (1).png'; 
   
 

})



// time update on both side

    // var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // stime.innerText = progress;


