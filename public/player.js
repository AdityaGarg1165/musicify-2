const play2 = document.getElementById("playb")
const pause2 = document.getElementById("pause")


play2.addEventListener("click",()=>{
    const image = document.getElementById("image")
    image.style.animationPlayState = "paused"
    // image.classList.remove("animate-[spin_5s_linear_infinite]")
})
pause2.addEventListener("click",()=>{
    const image = document.getElementById("image")
    image.style.animationPlayState = "running"
    // image.classList.add("animate-[spin_5s_linear_infinite]")
})