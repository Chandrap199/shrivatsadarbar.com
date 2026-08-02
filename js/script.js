document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");

    let currentSlide = 0;
    let autoPlay;

    function showSlide(index){

        slides.forEach((slide)=>{
            slide.classList.remove("active");
        });

        dots.forEach((dot)=>{
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentSlide = index;

    }

    function nextSlide(){

        let next = currentSlide + 1;

        if(next >= slides.length){
            next = 0;
        }

        showSlide(next);

    }

    function startAutoPlay(){

        autoPlay = setInterval(nextSlide,5000);

    }

    startAutoPlay();

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            clearInterval(autoPlay);

            showSlide(index);

            startAutoPlay();

        });

    });

});
