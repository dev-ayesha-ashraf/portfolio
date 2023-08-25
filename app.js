let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none"
})

window.addEventListener("hashchange", function () {
    const url = this.window.location.href;
    const [_, section = null] = url.split("#");

    if (section === "home" || !section) {
        document.getElementById("home").style.display = "inline-table";
    } else {
        document.getElementById("home").style.display = "none";

    }
});
let isSideBarOpen = false;
document.querySelector("#checkbtn").addEventListener("click", () => {
    const sideBar = document.querySelector(".header");
    if (isSideBarOpen) {
        sideBar.style.left = "-285px"
        isSideBarOpen = false;
    } else {
        isSideBarOpen = true;
        sideBar.style.left = "-0px"
    }
})

let readLess = document.getElementById("readless").style.display = "none"

function handleBtn() {
    let fullText = "Welcome to my professional portfolio! As a seasoned frontend developer, I take impriincraftingelegant and high-performance web solutions. With a meticulous eye for detail andproficiency in HTML, CSS, and JavaScript, I deliver pixel-perfect designs and seamless userinteractions. Let's collaborate to elevate your online presence and showcase your brand with acutting-edge digital experience. Explore my work, and let's turn your vision into reality. I am interested in IT and everything in its orbit I began to be fascinated by web programming e.g. developing apps and building websites.  As a skilled Frontend Developer, I am passionate about crafting beautiful user interfaces and seamless interactions. With expertise in HTML, CSS, and JavaScript, I bring your designs to life and ensure they function flawlessly across various devices and browsers. I am always on the lookout for new technologies and trends to enhance user experiences and deliver top-notch performance. Let's work together to build a dynamic, responsive, and user-friendly web presence that leaves a lasting impression";
    document.getElementById("aboutPara").innerHTML = fullText;
    let readBtn = document.getElementById("readBtn").style.display = "none";
    let readLess = document.getElementById("readless").style.display = "block"
}
function handleLessBtn() {
    let originalText = "Welcome to my professional portfolio! As a seasoned frontend developer, I take immense pride in crafting elegant and high-performance web solutions. With a meticulous eye for detail and proficiency in HTML, CSS, and JavaScript, I deliver pixel-perfect designs and seamless user interactions. Let's collaborate to elevate your online presence and showcase your brand with acutting-edge digital experience. Explore my work, and let's turn your vision into reality."
    document.getElementById("aboutPara").innerHTML = originalText;
    readBtn.style.display = "block"
    readBtn.style.marginLeft = "30%"
    let readLess = document.getElementById("readless").style.display = "none"
}

let number = document.getElementById("number")
let counter = 0;
setInterval(() => {
    if(counter == 95){
clearInterval()
    }
    else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
   
}, 30)
let numberTwo = document.getElementById("number-two")
let counterTwo = 0;
setInterval(() => {
    if(counterTwo == 80){
clearInterval()
    }
    else{
        counterTwo += 1;
        numberTwo.innerHTML = counter + "%";
    }
   
}, 30)