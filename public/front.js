

const seekbar = document.getElementById("seekbar")
const seekdiv = document.getElementById("seek")
const AudioElem = document.getElementById("play")
const pause = document.getElementById("pause")
const play = document.getElementById("playb")
const image = document.getElementById("image")


let isPlaying = true

play.addEventListener("click",()=>{
    AudioElem.pause()
    isPlaying = false
    pause.classList.remove("hidden")
    play.classList.add("hidden")

    
    
})

pause.addEventListener("click",()=>{
    AudioElem.play()
    isPlaying = true;
    pause.classList.add("hidden")
    play.classList.remove("hidden")


})


seekdiv.addEventListener("click",(e)=>{
    const rect = seekdiv.getBoundingClientRect()
    const percentage = (Math.min(Math.max(0,e.x - rect.x),rect.width)/rect.width) *100
    AudioElem.currentTime = (percentage * AudioElem.duration)/100
    seekbar.style.width = `${percentage}%`
})


AudioElem.addEventListener("timeupdate",()=>{
    const progress = parseInt((AudioElem.currentTime/AudioElem.duration)*100)
    seekbar.style.width = `${progress}%`
    const currtime = document.getElementById("currtime")
    const dur = document.getElementById("duration")
    const dur_min = AudioElem.duration / 60
    const dur_sec = AudioElem.duration % 60
    const cur_sec = AudioElem.currentTime % 60
    const cur_min = AudioElem.currentTime / 60
    if(parseInt(cur_sec).toString().length === 1){

        currtime.innerText = `${parseInt(cur_min)}:0${parseInt(cur_sec)}`
    }
    else{
        currtime.innerText = `${parseInt(cur_min)}:${parseInt(cur_sec)}`
    }
    if(parseInt(dur_sec).toString().length === 1){

        dur.innerText = `${parseInt(dur_min)}:0${parseInt(dur_sec)}`
        // currtime.innerText = `${parseInt(cur_min)}:0${parseInt(cur_sec)}`
    }
    else{
        dur.innerText = `${parseInt(dur_min)}:${parseInt(dur_sec)}`
    }

})