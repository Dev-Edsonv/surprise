let time = 2000
let currentImageIndex = 0
let images =  document.querySelectorAll("#slider img")
let max = images.length
let button = document.querySelector("button")

function nextImage() {

    images[currentImageIndex]
    .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}


function start() {
    setInterval( () => {
        nextImage()
    }, 3000)
}


button.addEventListener("click", start)