
//texto efecto
let h1=document.querySelector(".about > div > div:first-child h1");
let carta1=document.querySelector(".about .targeta .cards > div:first-child");
let carta2=document.querySelector(".about .targeta .cards > div:last-child");

window.addEventListener("load",()=>{
    h1.classList.add('active');
    carta1.classList.add('active');
    carta2.classList.add('active');
})

button = document.querySelector(".menu > ion-icon");
menu = document.querySelector(".menu > div");

button.addEventListener('click',()=>{
  menu.classList.toggle("active");
})

//---------Day-Night button-----------
daynight = document.querySelector(".sunny-outline");
body = document.querySelector(".body");

daynight.addEventListener('click',()=>{
  body.classList.toggle("change");
})

//----------------load-----------------------
window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }

      }
});






