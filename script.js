// =============================
// NAVBAR BLUR ON SCROLL
// =============================

const nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        nav.style.background = "rgba(255,255,255,.9)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        nav.style.background = "rgba(255,255,255,.75)";
        nav.style.boxShadow = "none";

    }

});





// =============================
// SCROLL REVEAL PREMIUM
// =============================


const elements = document.querySelectorAll(
".service, .steps div, .cars div, .reviews div, .experience"
);


elements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s cubic-bezier(.2,.8,.2,1)";

});



const reveal = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

    entry.target.style.opacity="1";
    entry.target.style.transform="translateY(0)";

}


});


},{
threshold:.15
});



elements.forEach(el=>{

    reveal.observe(el);

});







// =============================
// HERO IMAGE PARALLAX
// =============================


const heroImage = document.querySelector(".hero-image img");


window.addEventListener("scroll",()=>{


if(heroImage){

let move = window.scrollY * 0.08;

heroImage.style.transform =
`translateY(${move}px)`;

}


});








// =============================
// BUTTON MICRO INTERACTION
// =============================


const buttons = document.querySelectorAll(
"button,.btn"
);



buttons.forEach(button=>{


button.addEventListener("mouseenter",()=>{


button.style.transform="translateY(-3px)";


button.style.transition=".3s";


});



button.addEventListener("mouseleave",()=>{


button.style.transform="translateY(0)";


});


});







// =============================
// SEARCH BOX EFFECT
// =============================


const searchBox = document.querySelector(".search-box");


if(searchBox){


searchBox.addEventListener("click",()=>{


searchBox.style.boxShadow =
"0 25px 70px rgba(39,194,255,.25)";


});



searchBox.addEventListener("mouseleave",()=>{


searchBox.style.boxShadow =
"0 20px 50px rgba(0,0,0,.08)";


});


}








// =============================
// FAKE PRICE CALCULATOR
// =============================


const calculate = document.querySelector(
".search-box button"
);



if(calculate){


calculate.addEventListener("click",()=>{


calculate.innerHTML =
"Calcolo in corso...";


setTimeout(()=>{


calculate.innerHTML =
"Prezzo disponibile ✓";


},1200);



});


}







// =============================
// SMOOTH ANCHOR
// =============================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener("click",(e)=>{


e.preventDefault();


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){

target.scrollIntoView({

behavior:"smooth"

});

}


});


});







// =============================
// CURSOR EFFECT DESKTOP
// =============================


const cursor = document.createElement("div");


cursor.className="cursor";


document.body.appendChild(cursor);



window.addEventListener("mousemove",(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";


});
