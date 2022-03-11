// ============== Navigation

(() => {

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showMenu(){
        navMenu.classList.add("open")
        bodyscrollingToggle();
    }
    function hideNavMenu(){
        navMenu.classList.remove("open")
        fadeOutEffect ();
        bodyscrollingToggle();

    }

    function fadeOutEffect (){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    document.addEventListener("click", (event) => {
        if(event.target.classList.contains('link-item')){

            if(event.target.hash !==""){
                event.preventDefault()
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");

                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");

                if(navMenu.classList.contains("open")){

                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in");

                    hideNavMenu();
                }
                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) => {
                        if(hash === item.hash){

                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in");
                        }
                    })
                    fadeOutEffect();
                }
                window.location.hash = hash;
            }
        }
    })

})();











// ========== about

(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
         const target = event.target.getAttribute("data-target");

         tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

         event.target.classList.add("active","outer-shadow");

         document.querySelector(".tab-content.active").classList.remove("active");

         document.querySelector(target).classList.add("active");

    
         
        
        }
    })
})();
















// ==================== Testimo 

(() => {
    
    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next"),
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);


    slides.forEach((slide) => {
        slide.style.width = slideWidth + "px";
    })

    sliderContainer.style.wdth = slideWidth * slides.length + "px";

    nextBtn.addEventListener("click", () => {
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slider();

    })

    prevBtn.addEventListener("click", () => {
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
        slider();
    })

    function slider(){

        sliderContainer.querySelector(".testi-item.active").classList.remove("active");

        slides[slideIndex].classList.add("active");

        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    }
    slider();
})();




// ==================== Testimo End


// =============== hide 


(() => {

    const section = document.querySelectorAll(".section");
    section.forEach((section) => {
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })

})();

window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloder").style.display="none";
    },600)
})

// =============== hide end
