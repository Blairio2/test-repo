// const image = document.getElementById("image");
// const button = document.getElementById("resize-image")

// button.addEventListener("click", () => {
//     if(button.innerHTML == "Increase Size") {
//         image.style.width = "400px"
//         button.innerHTML = "Reduce Size"
//         button.style.background = "royalblue"
//     }
//     else {
//         image.style.width = "300px"
//         button.innerHTML = "Increase Size"
//         button.style.background = "skyblue"
//     }
// })

// image.addEventListener("mouseover", () => {
//     image.style.width = "400px"
// })
// image.addEventListener("mouseout", () => {
//     image.style.width = "300px"
// })

// image.style.border = "2px solid red"
// image.borderRadius = "50px";


let index = 0;
const slides = document.querySelectorAll(".slide")
const len = slides.length - 1

function moveLeft() {
    displaySlide(-1)
}

function moveRight() {
    displaySlide(+1)
}

function displaySlide(val) {
    index += val;
    if(index > len){
        index = 0;
    }
    else if(index < 0){
        index = len;
    }
    console.log(index)

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[index].style.display = "block"
    slides[index].classList.add("fade")

}

// setInterval(() => {
//     displaySlide(+1)
// }, 10000)
