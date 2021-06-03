//navigation menu

(() =>{
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavBtn = document.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click", showNavMenu);
  closeNavBtn.addEventListener("click",hideNavMenu);

  function showNavMenu(){
    navMenu.classList.add("open");
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
  }
  function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout( ()=> {
      document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
  }

  document.addEventListener("click", (event) =>{
    if(event.target.classList.contains('link-item')){
      // make sure event.target.hash has a value before overriding default behavior
      if(event.target.hash !==""){
        // prevent default anchor click behavior
        event.preventDefault();
        const hash = event.target.hash;
        // deactivate existing active 'section'
        document.querySelector(".section.active").classList.add("hide");
        document.querySelector(".section.active").classList.remove("active");
        // // activate new section
        document.querySelector(hash).classList.add("active");
        document.querySelector(hash).classList.remove("hide");
        // // deactivate existing active navigation menu 'link-item'
        navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
        navMenu.querySelector(".active").classList.remove("active","inner-shadow");
        // // activate new navigation menu 'link-item'
        event.target.classList.add("active","inner-shadow");
        event.target.classList.remove("outer-shadow","hover-in-shadow");
      }
    }
  })
})();


// about section tabs

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) =>{
      if(event.target.classList.contains("tab-item") && 
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
           
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active");
        }
        
    })
})();

//certificates section

// (() => {
//     const sliderContainer = document.querySelector(".certi-slider-container"),
//     slides= sliderContainer.querySelectorAll(".certi-item");
//     slideWidth = sliderContainer.offsetWidth;
//     prevBtn = document.querySelector(".certi-slider-nav .prev"),
//     nextBtn = document.querySelector(".certi.slider-nav .next");
//     let slideIndex = 0;

//     slides.forEach((slide) => {
//         slide.style.width = slideWidth + "px";
//     })

//     sliderContainer.style.width = slideWidth * slides.length + "px";

//     nextBtn.addEventListener("click" ,() =>{

//     })
// })();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("certi-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active1";
}

/*---hide all section except active---*/
(() => {  

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    if(!section.classList.contains("active")){
      section.classList.add("hide");
    }
  })

}) ();