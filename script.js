const mobileMenuIcon = document.querySelector(".mobile-menu__icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
const mobileMenulinks = document.querySelectorAll('.mobile-menu-link');

mobileMenuIcon.addEventListener('click',()=>{
    mobileMenu.classList.toggle('open');

});

mobileMenuCloseBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('open');

});

mobileMenulinks.forEach((link)=>{
    link.addEventListener("click",()=>{
    mobileMenu.classList.toggle('open');
    });
});

var mainHeaderLinks=document.querySelectorAll('.main-header-link');
var mobileHeaderLinks=document.querySelectorAll('.mobile-menu-link');


mainHeaderLinks.forEach((link)=>{
    link.addEventListener('click',(event)=>{
        var linkHash=event.target.hash;

        if(linkHash !== undefined){
            event.preventDefault();
            var linkSection=document.querySelector(linkHash);
            var linkSectionTop=linkSection.getBoundingClientRect().top;
            window.scrollBy({
                top:linkSectionTop,
                behavior:'smooth'
            });
        }

    });
});


mobileHeaderLinks.forEach((link)=>{
    link.addEventListener('click',(event)=>{
        var linkHash=event.target.hash;
        if(linkHash !== undefined){
            event.preventDefault();
            var linkSection=document.querySelector(linkHash);
            var linkSectionTop=linkSection.getBoundingClientRect().top;
            window.scrollBy({
                top:linkSectionTop,
                behavior:'smooth'
            });
        }

    });
});

