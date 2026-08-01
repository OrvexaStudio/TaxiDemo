// =========================
// NOX TRANSFER
// =========================


// Navbar dinamica

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});



// =========================
// Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
".story, .service, .numbers div, .vehicle, .step, .cta"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// =========================
// Counter
// =========================

const counters = document.querySelectorAll(".numbers strong");

let counterStarted = false;

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting && !counterStarted){

counterStarted = true;

counters.forEach(counter=>{

const text = counter.innerText;

const number = parseInt(text.replace(/\D/g,""));

let current = 0;

const increment = Math.max(1, number / 80);

const timer = setInterval(()=>{

current += increment;

if(current >= number){

current = number;

clearInterval(timer);

}

if(text.includes("%")){

counter.innerText = Math.floor(current)+"%";

}
else if(text.includes("+")){

counter.innerText = Math.floor(current)+"+";

}
else if(text.toLowerCase().includes("min")){

counter.innerText = Math.floor(current)+" min";

}
else if(text.includes("/")){

counter.innerText = text;

clearInterval(timer);

}
else{

counter.innerText = Math.floor(current);

}

},20);

});

}

});

},{
threshold:.4
});

const numbers = document.querySelector(".numbers");

if(numbers){

counterObserver.observe(numbers);

}



// =========================
// Hero Parallax
// =========================

const hero = document.querySelector("header");

window.addEventListener("scroll",()=>{

const y = window.scrollY;

hero.style.backgroundPosition = `center ${y * 0.35}px`;

});




// =========================
// Smooth Buttons
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target = document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});




// =========================
// Mouse Glow
// =========================

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});




// =========================
// Current Year
// =========================

const year = document.querySelector(".year");

if(year){

year.textContent = new Date().getFullYear();

}
