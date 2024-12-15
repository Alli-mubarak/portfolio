let animation = document.querySelector(".animation");
const home = document.querySelector(".content");
const hirePage = document.querySelector(".hire");
const projectPage = document.querySelector(".projects");
const certPage = document.querySelector(".certificates");
const bigContainer = document.querySelector(".design");
setTimeout(()=>{
    animation.style.display = "none";
},9000);
let yearInput = document.getElementById("year");
let date = new Date();
yearInput.innerHTML = date.getFullYear();

let container = document.querySelector(".container");
let content = document.querySelector(".content");
let screenSize = window.screen.width;

bigContainer.onmouseleave = () =>{
    console.log(screenSize);
    if(screenSize < 1000){
    home.style.display= "block";
    hirePage.style.display= "none";
    certPage.style.display= "none";
    projectPage.style.display= "none";
    console.log(window.screen.width);
    }else if(screenSize > 1000){
        home.style.display= "flex";
        hirePage.style.display= "none";
        certPage.style.display= "none";
        projectPage.style.display= "none";
    }
}
function openProjects(){
    home.style.display= "none";
    hirePage.style.display= "none";
    certPage.style.display= "none";
    projectPage.style.display= "block";
}
function openCert(){
    home.style.display= "none";
    hirePage.style.display= "none";
    certPage.style.display= "block";
    projectPage.style.display= "none";
}
function openHire(){
    home.style.display= "none";
    hirePage.style.display= "block";
    certPage.style.display= "none";
    projectPage.style.display= "none";
}
console.log(screenSize);
