document.addEventListener("DOMContentLoaded", function () {

    const text = document.querySelector(".zero");

    setInterval(() => {
        text.style.color = "gold";
        text.style.textShadow = "0 0 10px gold, 0 0 20px gold, 0 0 40px gold";
        text.style.transition = "0.8s ease";

        setTimeout(() => {
            text.style.color = "white";
            text.style.textShadow = "none";
        }, 800);

    }, 1600);

});




const todoBox = document.querySelectorAll(".todo");

todoBox.forEach(box => {
box.addEventListener("mouseenter", () => {
box.style.transform = "scale(1.08)";
box.style.color = "gold";
box.style.boxShadow = "0 0 15px gold";
box.style.transition = "0.3s";
});

box.addEventListener("mouseleave", () => {
box.style.transform = "scale(1)";
box.style.color = "white";
box.style.boxShadow = "none";
});
});



const aboutRing = document.querySelector(".do");

setInterval(() => {
aboutRing.style.boxShadow = "0 0 10px gold,0 0 20px gold,0 0 40px gold";
aboutRing.style.transition = "0.8s";

setTimeout(() => {
aboutRing.style.boxShadow = "0 0 5px gold";
}, 800);

}, 1600);


document.addEventListener("DOMContentLoaded", function () {

    const text = document.querySelector(".do");

    setInterval(() => {
        text.style.color = "gold";
        text.style.textShadow = "0 0 10px gold, 0 0 20px gold, 0 0 40px gold";
        text.style.transition = "0.8s ease";

        setTimeout(() => {
            text.style.color = "white";
            text.style.textShadow = "none";
        }, 800);

    }, 1600);
});

const toggle = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", ()=>{
  menu.classList.toggle("active");
});
