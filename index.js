const burger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

window.onload = function(){
    burger.addEventListener("click", (event)=>{
    
        nav.classList.toggle("show");     
    
        
    });
}








