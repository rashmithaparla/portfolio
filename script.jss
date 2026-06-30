// ==========================
// PORTFOLIO SCRIPT
// ==========================

// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Navbar Background
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";
        header.style.background="rgba(15,23,42,.95)";

    }

    else{

        header.style.boxShadow="none";
        header.style.background="rgba(15,23,42,.9)";

    }

});

// ==========================
// Typing Effect
// ==========================

const textArray = [
    "Web Developer",
    "Software Developer",
    "React Developer",
    "IoT Enthusiast"
];

const typingElement = document.querySelector(".left h3");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentText = textArray[textIndex];

    if(!deleting){

        typingElement.textContent=currentText.substring(0,charIndex++);

        if(charIndex>currentText.length){

            deleting=true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingElement.textContent=currentText.substring(0,charIndex--);

        if(charIndex===0){

            deleting=false;

            textIndex++;

            if(textIndex===textArray.length){

                textIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?50:120);

}

typeEffect();

// ==========================
// Reveal Animation
// ==========================

const revealElements = document.querySelectorAll(
    ".card,.education,.skill-box div,section h2,.contact p"
);

function reveal(){

    const windowHeight=window.innerHeight;

    revealElements.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        if(top<windowHeight-100){

            el.style.opacity="1";
            el.style.transform="translateY(0)";

        }

    });

}

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();

// ==========================
// Scroll To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#38bdf8";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================
// Welcome Message
// ==========================

window.onload=()=>{

    console.log("Welcome to Parla Rashmitha's Portfolio 🚀");

};