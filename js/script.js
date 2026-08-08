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

if (hero && slides.length && dots.length) {

    hero.addEventListener("mouseenter", stopSlider);

    hero.addEventListener("mouseleave", startSlider);

    startSlider();

}
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

/* ===========================================
   PRODUCT WHATSAPP ORDER
=========================================== */

const whatsappButton = document.getElementById("whatsapp-order");

if (whatsappButton) {

    whatsappButton.addEventListener("click", function (e) {

        e.preventDefault();

        const productName = "Premium Handmade Poshak";
        const price = "₹799";

        let selectedSize = "Not Selected";

        const activeSize = document.querySelector(".size.active");

        if (activeSize) {
            selectedSize = activeSize.textContent.trim();
        }

        const message = `Jai Shri Krishna 🙏

I would like to order:

Product: ${productName}

Size: ${selectedSize}

Price: ${price}

Product Link:
${window.location.href}

Please share the payment details.

Thank you.`;
        const phone = "918826196544";

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

    });

}
/* ===========================================
   PRODUCT SIZE SELECTION
=========================================== */

const sizeButtons = document.querySelectorAll(".size");

sizeButtons.forEach(button => {

    button.addEventListener("click", function () {

        sizeButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

    });

});
/* ===========================================
   PRODUCT IMAGE GALLERY
=========================================== */

const thumbnails = document.querySelectorAll(".product-gallery img");
console.log("Thumbnails found:", thumbnails.length);
const mainImage = document.getElementById("mainProductImage");
console.log("Main image:", mainImage);

if (thumbnails.length && mainImage) {

    thumbnails.forEach((thumb) => {

        thumb.addEventListener("click", function () {

            thumbnails.forEach((item) => {
                item.classList.remove("active-thumb");
            });

            this.classList.add("active-thumb");

            mainImage.src = this.dataset.image;
            mainImage.alt = this.alt;

        });

    });

}

/* ==========================================
   PREMIUM FAQ ACCORDION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");
        const icon = question ? question.querySelector("i") : null;

        if (!question) return;

        question.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            /* Close all FAQ items */
            faqItems.forEach(other => {

                other.classList.remove("active");

                const otherIcon =
                    other.querySelector(".faq-question i");

                if (otherIcon) {
                    otherIcon.className = "fa-solid fa-plus";
                }

            });

            /* Open clicked item if it was closed */
            if (!isActive) {

                item.classList.add("active");

                if (icon) {
                    icon.className = "fa-solid fa-minus";
                }

            }

        });

    });


    /* ==========================================
       FAQ CALLBACK WHATSAPP
    ========================================== */

    const callbackForm =
        document.getElementById("callbackForm");

    if (callbackForm) {

        callbackForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name =
                document.getElementById("cb-name").value.trim();

            const phone =
                document.getElementById("cb-phone").value.trim();

            const email =
                document.getElementById("cb-email").value.trim();

            const message =
                document.getElementById("cb-message").value.trim();


            const whatsappMessage =
`🙏 Jai Shri Krishna

📞 Callback Request

👤 Name: ${name}
📱 Mobile: ${phone}
📧 Email: ${email || "Not Provided"}

📝 Message:
${message || "No additional message"}

Please contact me as soon as possible.

Thank you.
`;


            const whatsappURL =
                "https://wa.me/918826196544?text=" +
                encodeURIComponent(whatsappMessage);


            window.open(whatsappURL, "_blank");

            callbackForm.reset();

        });

    }

});
