const content = document.getElementById("impact-rotate");
const bg = document.getElementById("impact-bg");
const bgw =document.getElementById("width-increment");
const clickMenu = document.getElementById("click-menu")
const btnContent = document.getElementById("content")

function change(){
    const scroll = window.scrollY;
    console.log(scroll);
    if(scroll<2100){
        content.style.transform = "rotate(-20deg)";
        bg.style.transform =  "rotate(20deg)";
    }
    else if(scroll >2100 && scroll < 2500)
    {
        var contentrotate;
        const newrotate = Math.floor(230-scroll/10);
        bg.style.transform =  "rotate("+ newrotate +"deg)";
        if(newrotate<0){
            contentrotate = -1*newrotate
            content.style.transform = "rotate(" + contentrotate+ "deg)";
        }
        else{
            content.style.transform = "rotate(-" + newrotate+ "deg)";
        }
        // content.style.transform = "rotate(-" + contentrotate+ "deg)";
    }
    else{
        content.style.transform = "rotate(20deg)";
        bg.style.transform =  "rotate(-20deg)";
    }
    if(scroll>3700){
        var scrollSlow = (scroll / 10) - 370;
        bgw.style.width = Math.min(Math.max(scrollSlow, 10), 80) + "%";
    }
}
let bdy = document.querySelector("body");
if (bdy.offsetWidth>800){

    window.addEventListener("scroll",change);
}

function menu(){
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const mobile = document.querySelector(".mobile-fixed");
    nav.style.display="none";
    main.style.display="none";
    footer.style.display="none";
    mobile.style.display="block";
}

clickMenu.addEventListener("click",menu)

function contentshow(){
    const nav = document.querySelector("nav");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const mobile = document.querySelector(".mobile-fixed");
    nav.style.display="block";
    main.style.display="block";
    footer.style.display="block";
    mobile.style.display="none";
}

btnContent.addEventListener("click",contentshow)
