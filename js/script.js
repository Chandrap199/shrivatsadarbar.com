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

let selectedSize = "Not Selected";
let selectedPrice = "Not Selected";

const activeSize = document.querySelector(".size.active");

if (activeSize) {

    selectedSize = activeSize.textContent.trim();

    selectedPrice = activeSize.dataset.price
        ? `₹${activeSize.dataset.price}`
        : "Not Available";

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
   POSHAK SIZE & DYNAMIC PRICING
=========================================== */

const sizeButtons = document.querySelectorAll(".size");
const productPrice = document.getElementById("productPrice");
const productMRP = document.getElementById("productMRP");
const productSave = document.getElementById("productSave");

const productPricing =
    typeof POSHAK_PRICING !== "undefined"
        ? POSHAK_PRICING["poshak-001"]
        : null;

if (
    sizeButtons.length &&
    productPrice &&
    productMRP &&
    productSave &&
    productPricing
) {

    function updateProductPrice(size) {

        const pricing = productPricing[size];

        if (!pricing) {
            console.error("Pricing not found for size:", size);
            return;
        }

        productPrice.textContent =
            `₹${pricing.price}`;

        productMRP.textContent =
            `₹${pricing.mrp}`;

        const saving =
            pricing.mrp - pricing.price;

        productSave.textContent =
            `Save ₹${saving}`;
    }


    sizeButtons.forEach(button => {

        button.addEventListener("click", function () {

            sizeButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const selectedSize =
                this.dataset.size;

            updateProductPrice(selectedSize);

        });

    });


    /* Set initial price */

    const activeButton =
        document.querySelector(".size.active");

    if (activeButton) {

        updateProductPrice(
            activeButton.dataset.size
        );

    }

}
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



/* =========================================================
   PREMIUM SEARCH OVERLAY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchToggle = document.getElementById("searchToggle");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("siteSearchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchToggle || !searchOverlay || !searchClose) {
        return;
    }


    /* Open Search */

    searchToggle.addEventListener("click", function () {

        searchOverlay.classList.add("active");

        document.body.classList.add("search-open");

        setTimeout(function () {

            if (searchInput) {
                searchInput.focus();
            }

        }, 300);

    });


    /* Close Search */

    searchClose.addEventListener("click", function () {

        searchOverlay.classList.remove("active");

        document.body.classList.remove("search-open");

    });


    /* Close when clicking outside the panel */

    searchOverlay.addEventListener("click", function (event) {

        if (event.target === searchOverlay) {

            searchOverlay.classList.remove("active");

            document.body.classList.remove("search-open");

        }

    });


    /* Close with Escape key */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            searchOverlay.classList.contains("active")
        ) {

            searchOverlay.classList.remove("active");

            document.body.classList.remove("search-open");

        }

    });

});

    /* =====================================================
   SEARCH DATA
===================================================== */

const searchItems = [

    {
        name: "Premium Poshak",
        keywords: "poshak dress clothes laddu gopal krishna bal gopal",
        url: "collections/poshak.html"
    },

    {
        name: "Royal Mukut",
        keywords: "mukut crown kirti mukut laddu gopal krishna",
        url: "collections/mukut.html"
    },

    {
        name: "Necklace Collection",
        keywords: "necklace jewellery jewelry haar laddu gopal krishna",
        url: "collections/necklace.html"
    },

    {
        name: "Earrings Collection",
        keywords: "earrings jewellery jewelry kundan laddu gopal krishna",
        url: "collections/earrings.html"
    },

    {
        name: "Hair Accessories",
        keywords: "hair accessories gajra laddu gopal krishna",
        url: "collections/hair-accessories.html"
    },

    {
        name: "Flute Collection",
        keywords: "flute bansuri krishna laddu gopal",
        url: "collections/flute.html"
    },

    {
        name: "Jhula Collection",
        keywords: "jhula swing palna hindola laddu gopal krishna",
        url: "collections/jhula.html"
    },

    {
        name: "Accessories",
        keywords: "accessories shringar devotional laddu gopal krishna",
        url: "collections/accessories.html"
    },

    {
        name: "Rakhi Collection",
        keywords: "rakhi raksha bandhan festival devotional krishna",
        url: "collections/rakhi.html"
    }

];

/* =====================================================
   SHRI VATSADARBAR — SEARCH
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("siteSearchInput");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults) {
        return;
    }

    const searchItems = [

        {
            name: "Premium Poshak",
            keywords: "poshak dress clothes laddu gopal krishna bal gopal",
            url: "collections/poshak.html"
        },

        {
            name: "Royal Mukut",
            keywords: "mukut crown kirti mukut laddu gopal krishna",
            url: "collections/mukut.html"
        },

        {
            name: "Necklace Collection",
            keywords: "necklace jewellery jewelry haar laddu gopal krishna",
            url: "collections/necklace.html"
        },

        {
            name: "Earrings Collection",
            keywords: "earrings jewellery jewelry kundan laddu gopal krishna",
            url: "collections/earrings.html"
        },

        {
            name: "Hair Accessories",
            keywords: "hair accessories gajra laddu gopal krishna",
            url: "collections/hair-accessories.html"
        },

        {
            name: "Flute Collection",
            keywords: "flute bansuri krishna laddu gopal",
            url: "collections/flute.html"
        },

        {
            name: "Jhula Collection",
            keywords: "jhula swing palna hindola laddu gopal krishna",
            url: "collections/jhula.html"
        },

        {
            name: "Accessories",
            keywords: "accessories shringar devotional laddu gopal krishna",
            url: "collections/accessories.html"
        },

        {
            name: "Rakhi Collection",
            keywords: "rakhi raksha bandhan festival devotional krishna",
            url: "collections/rakhi.html"
        }

    ];


    searchInput.addEventListener("input", function () {

        const query = searchInput.value.trim().toLowerCase();

        if (query === "") {

            searchResults.innerHTML = `
                <p class="search-empty">
                    Start typing to discover our collections.
                </p>
            `;

            return;
        }


        const matches = searchItems.filter(function (item) {

            return (
                item.name.toLowerCase().includes(query) ||
                item.keywords.toLowerCase().includes(query)
            );

        });


        if (matches.length === 0) {

            searchResults.innerHTML = `
                <p class="search-empty">
                    No matching collection found.
                </p>
            `;

            return;
        }


        searchResults.innerHTML = matches.map(function (item) {

            return `
                <a href="${item.url}" class="search-result-item">
                    <i class="fa-solid fa-arrow-right"></i>
                    <span>${item.name}</span>
                </a>
            `;

        }).join("");

    });

});


/* =========================================================
   SHRI VATSADARBAR
   GLOBAL PRODUCT IMAGE ZOOM
   Works automatically on all product pages
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const mainImage =
        document.getElementById("mainProductImage");

    /* -----------------------------------------------------
       If this is not a product page, do nothing.
    ----------------------------------------------------- */

    if (!mainImage) {
        return;
    }


    /* =====================================================
       ZOOM SETTINGS
    ===================================================== */

    let currentZoom = 1;

    const minZoom = 1;
    const maxZoom = 3;
    const zoomStep = 0.25;


    /* =====================================================
       FIND EXISTING ZOOM BUTTONS
       OR CREATE THEM AUTOMATICALLY
    ===================================================== */

    let zoomIn =
        document.getElementById("zoomIn");

    let zoomOut =
        document.getElementById("zoomOut");

    let zoomReset =
        document.getElementById("zoomReset");


    /* -----------------------------------------------------
       PRODUCT IMAGE CONTAINER
    ----------------------------------------------------- */

    const imageContainer =
        mainImage.parentElement;


    /* =====================================================
       CREATE ZOOM CONTROLS IF MISSING
    ===================================================== */

    if (!zoomIn || !zoomOut || !zoomReset) {

        let zoomControls =
            document.querySelector(".product-zoom-controls");


        if (!zoomControls) {

            zoomControls =
                document.createElement("div");

            zoomControls.className =
                "product-zoom-controls";

            zoomControls.innerHTML = `

                <button
                    type="button"
                    id="zoomOut"
                    aria-label="Zoom out">
                    −
                </button>

                <button
                    type="button"
                    id="zoomReset"
                    aria-label="Reset zoom">
                    ↺
                </button>

                <button
                    type="button"
                    id="zoomIn"
                    aria-label="Zoom in">
                    +
                </button>

            `;


            /*
             * Add controls after the product image.
             */

            if (imageContainer) {

                imageContainer.appendChild(
                    zoomControls
                );

            }

        }


        zoomIn =
            document.getElementById("zoomIn");

        zoomOut =
            document.getElementById("zoomOut");

        zoomReset =
            document.getElementById("zoomReset");

    }


    /* =====================================================
       IMAGE CONTAINER SETTINGS
    ===================================================== */

    if (imageContainer) {

        imageContainer.style.overflow =
            "hidden";

    }


    mainImage.style.transformOrigin =
        "center center";

    mainImage.style.transition =
        "transform 0.25s ease";


    /* =====================================================
       APPLY ZOOM
    ===================================================== */

    function applyZoom() {

        mainImage.style.transform =
            `scale(${currentZoom})`;


        if (currentZoom > 1) {

            mainImage.style.cursor =
                "zoom-out";

        } else {

            mainImage.style.cursor =
                "zoom-in";

        }

    }


    /* =====================================================
       ZOOM IN
    ===================================================== */

    if (zoomIn) {

        zoomIn.addEventListener(
            "click",
            function () {

                if (currentZoom < maxZoom) {

                    currentZoom += zoomStep;

                    currentZoom =
                        Math.min(
                            currentZoom,
                            maxZoom
                        );

                    applyZoom();

                }

            }
        );

    }


    /* =====================================================
       ZOOM OUT
    ===================================================== */

    if (zoomOut) {

        zoomOut.addEventListener(
            "click",
            function () {

                if (currentZoom > minZoom) {

                    currentZoom -= zoomStep;

                    currentZoom =
                        Math.max(
                            currentZoom,
                            minZoom
                        );

                    applyZoom();

                }

            }
        );

    }


    /* =====================================================
       RESET ZOOM
    ===================================================== */

    if (zoomReset) {

        zoomReset.addEventListener(
            "click",
            function () {

                currentZoom = 1;

                applyZoom();

            }
        );

    }


    /* =====================================================
       DOUBLE CLICK / DOUBLE TAP
    ===================================================== */

    mainImage.addEventListener(
        "dblclick",
        function () {

            if (currentZoom === 1) {

                currentZoom = 2;

            } else {

                currentZoom = 1;

            }

            applyZoom();

        }
    );


    /* =====================================================
       MOUSE WHEEL ZOOM
       DESKTOP
    ===================================================== */

    mainImage.addEventListener(
        "wheel",
        function (event) {

            event.preventDefault();


            if (event.deltaY < 0) {

                if (currentZoom < maxZoom) {

                    currentZoom += zoomStep;

                }

            } else {

                if (currentZoom > minZoom) {

                    currentZoom -= zoomStep;

                }

            }


            currentZoom =
                Math.max(
                    minZoom,
                    Math.min(
                        currentZoom,
                        maxZoom
                    )
                );


            applyZoom();

        },
        {
            passive: false
        }
    );


    /* =====================================================
       RESET WHEN CHANGING THUMBNAIL
    ===================================================== */

    const thumbnails =
        document.querySelectorAll(
            ".product-gallery img"
        );


    thumbnails.forEach(
        function (thumb) {

            thumb.addEventListener(
                "click",
                function () {

                    currentZoom = 1;

                    applyZoom();

                }
            );

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    applyZoom();

});
