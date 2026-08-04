document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");

    let currentSlide = 0;
    let sliderInterval;

    function showSlide(index) {

        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentSlide = index;
    }

    function startSlider() {

        sliderInterval = setInterval(() => {

            let next = currentSlide + 1;

            if (next >= slides.length) {
                next = 0;
            }

            showSlide(next);

        }, 5000);

    }

    function stopSlider() {
        clearInterval(sliderInterval);
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            stopSlider();
            showSlide(index);
            startSlider();

        });

    });

    const hero = document.querySelector(".hero-slider");

    hero.addEventListener("mouseenter", stopSlider);
    hero.addEventListener("mouseleave", startSlider);

    startSlider();

});
/*======================================================
        ANNOUNCEMENT BAR ROTATION
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const announcement = document.getElementById("announcementText");

    if (!announcement) return;

    const messages = [

        "🚚 Free Shipping on Orders Above ₹999",

        "🪔 Handcrafted with Devotion in Varanasi",

        "🇮🇳 Pan India Delivery Available",

        "🔒 Secure WhatsApp Ordering"

    ];

    let index = 0;

    setInterval(() => {

        announcement.classList.add("fade");

        setTimeout(() => {

            index = (index + 1) % messages.length;

            announcement.textContent = messages[index];

            announcement.classList.remove("fade");

        }, 600);

    }, 4000);

});
