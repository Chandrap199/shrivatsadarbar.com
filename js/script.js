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

const whatsappButton =
    document.getElementById("whatsapp-order");

if (whatsappButton) {

    whatsappButton.addEventListener("click", function (e) {

        e.preventDefault();

        /* Product Name */

        const productTitle =
            document.querySelector(".product-title h1");

        const informationTitle =
            document.querySelector(".product-information h2");

        const productName =
            productTitle && productTitle.textContent.trim()
                ? productTitle.textContent.trim()
                : informationTitle && informationTitle.textContent.trim()
                    ? informationTitle.textContent.trim()
                    : document.title.replace("| ShriVatsaDarbar", "").trim();


        /* Selected Size */

        let selectedSize = "Not Selected";

        const activeSize =
            document.querySelector(".size.active");

        if (activeSize) {

            selectedSize =
                activeSize.textContent.trim();

        }


        /* Current Product Price */

        let selectedPrice = "Price on Request";

        const currentPrice =
            document.getElementById("productPrice");

        if (
            currentPrice &&
            currentPrice.textContent.trim()
        ) {

            selectedPrice =
                currentPrice.textContent.trim();

        } else {

            const staticPrice =
                document.querySelector(".product-price");

            if (
                staticPrice &&
                staticPrice.textContent.trim()
            ) {

                selectedPrice =
                    staticPrice.textContent.trim();

            }

        }


        /* WhatsApp Message */

        const message =
`🙏 Jai Shri Krishna

I would like to enquire about:

Product: ${productName}

Size: ${selectedSize}

Price: ${selectedPrice}

Product Link:
${window.location.href}

Please share the availability, final price and shipping details.

Thank you.
`;


        const phone =
            "918826196544";


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
   SHRI VATSADARBAR — GLOBAL PREMIUM SEARCH
   Automatically works on ALL pages
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FIND SEARCH BUTTON AUTOMATICALLY
    ===================================================== */

    let searchToggle =
        document.getElementById("searchToggle");


    /*
     * If the page does not have #searchToggle,
     * automatically find the search icon inside
     * the header.
     */

    if (!searchToggle) {

        const headerButtons =
            document.querySelectorAll(
                ".header-actions .icon-btn"
            );


        headerButtons.forEach(function (button) {

            const searchIcon =
                button.querySelector(
                    ".fa-magnifying-glass"
                );


            if (searchIcon && !searchToggle) {

                searchToggle = button;

            }

        });

    }


    /* =====================================================
       STOP ONLY IF NO SEARCH BUTTON EXISTS
    ===================================================== */

    if (!searchToggle) {

        console.warn(
            "ShriVatsaDarbar: Search button not found."
        );

        return;

    }


    /* =====================================================
       CREATE SEARCH OVERLAY
       IF IT DOES NOT ALREADY EXIST
    ===================================================== */

    let searchOverlay =
        document.getElementById("searchOverlay");


    if (!searchOverlay) {

        searchOverlay =
            document.createElement("div");

        searchOverlay.className =
            "search-overlay";

        searchOverlay.id =
            "searchOverlay";


        searchOverlay.innerHTML = `

            <div class="search-panel">

                <button
                    class="search-close"
                    id="searchClose"
                    type="button"
                    aria-label="Close Search">

                    <i class="fa-solid fa-xmark"></i>

                </button>


                <div class="search-panel-content">

                    <span class="search-label">
                        Explore ShriVatsaDarbar
                    </span>


                    <h2>
                        What are you looking for?
                    </h2>


                    <div class="search-input-wrapper">

                        <i class="fa-solid fa-magnifying-glass"></i>


                        <input
                            type="search"
                            id="siteSearchInput"
                            placeholder="Search Poshak, Mukut, Necklace..."
                            autocomplete="off">

                    </div>


                    <div
                        class="search-results"
                        id="searchResults">

                        <p class="search-empty">
                            Start typing to discover our collections.
                        </p>

                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(
            searchOverlay
        );

    }


    /* =====================================================
       GET SEARCH ELEMENTS
    ===================================================== */

    const searchClose =
        document.getElementById("searchClose");

    const searchInput =
        document.getElementById("siteSearchInput");

    const searchResults =
        document.getElementById("searchResults");


    if (
        !searchOverlay ||
        !searchClose ||
        !searchInput ||
        !searchResults
    ) {

        console.warn(
            "ShriVatsaDarbar: Search elements missing."
        );

        return;

    }


    /* =====================================================
       SEARCH DATA
    ===================================================== */

    const searchItems = [

        {
            name: "Premium Poshak",
            keywords:
                "poshak dress clothes laddu gopal krishna bal gopal",
            url:
                "collections/poshak.html"
        },

        {
            name: "Royal Mukut",
            keywords:
                "mukut crown kirti mukut laddu gopal krishna",
            url:
                "collections/mukut.html"
        },

        {
            name: "Necklace Collection",
            keywords:
                "necklace jewellery jewelry haar laddu gopal krishna",
            url:
                "collections/necklace.html"
        },

        {
            name: "Earrings Collection",
            keywords:
                "earrings jewellery jewelry kundan laddu gopal krishna",
            url:
                "collections/earrings.html"
        },

        {
            name: "Hair Accessories",
            keywords:
                "hair accessories gajra laddu gopal krishna",
            url:
                "collections/hair-accessories.html"
        },

        {
            name: "Flute Collection",
            keywords:
                "flute bansuri krishna laddu gopal",
            url:
                "collections/flute.html"
        },

        {
            name: "Jhula Collection",
            keywords:
                "jhula swing palna hindola laddu gopal krishna",
            url:
                "collections/jhula.html"
        },

        {
            name: "Accessories",
            keywords:
                "accessories shringar devotional laddu gopal krishna",
            url:
                "collections/accessories.html"
        },

        {
            name: "Rakhi Collection",
            keywords:
                "rakhi raksha bandhan festival devotional krishna",
            url:
                "collections/rakhi.html"
        }

    ];


    /* =====================================================
       OPEN SEARCH
    ===================================================== */

    searchToggle.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            searchOverlay.classList.add(
                "active"
            );

            document.body.classList.add(
                "search-open"
            );


            setTimeout(function () {

                searchInput.focus();

            }, 300);

        }
    );


    /* =====================================================
       CLOSE SEARCH
    ===================================================== */

    function closeSearch() {

        searchOverlay.classList.remove(
            "active"
        );

        document.body.classList.remove(
            "search-open"
        );

    }


    searchClose.addEventListener(
        "click",
        closeSearch
    );


    /* =====================================================
       CLOSE OUTSIDE PANEL
    ===================================================== */

    searchOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target === searchOverlay
            ) {

                closeSearch();

            }

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                searchOverlay.classList.contains(
                    "active"
                )
            ) {

                closeSearch();

            }

        }
    );


    /* =====================================================
       SEARCH RESULTS
    ===================================================== */

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            /* EMPTY */

            if (!query) {

                searchResults.innerHTML = `

                    <p class="search-empty">
                        Start typing to discover our collections.
                    </p>

                `;

                return;

            }


            /* MATCH */

            const matches =
                searchItems.filter(
                    function (item) {

                        return (

                            item.name
                                .toLowerCase()
                                .includes(query)

                            ||

                            item.keywords
                                .toLowerCase()
                                .includes(query)

                        );

                    }
                );


            /* NO MATCH */

            if (!matches.length) {

                searchResults.innerHTML = `

                    <p class="search-empty">
                        No matching collection found.
                    </p>

                `;

                return;

            }


            /* RESULTS */

            searchResults.innerHTML =
                matches.map(
                    function (item) {

                        return `

                            <a
                                href="${getCorrectSearchURL(item.url)}"
                                class="search-result-item">

                                <i class="fa-solid fa-arrow-right"></i>

                                <span>
                                    ${item.name}
                                </span>

                            </a>

                        `;

                    }
                ).join("");

        }
    );


    /* =====================================================
       CORRECT URL FOR EVERY PAGE
    ===================================================== */

    function getCorrectSearchURL(
        collectionURL
    ) {

        const currentPath =
            window.location.pathname;


        /*
         * Already inside /collections/
         */

        if (
            currentPath.includes(
                "/collections/"
            )
        ) {

            return "../" + collectionURL;

        }


        /*
         * Root-level pages
         */

        return collectionURL;

    }


    console.log(
        "ShriVatsaDarbar: Global search initialized."
    );

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


/* =========================================================
   SHRI VATSADARBAR
   UNIVERSAL FONT AWESOME LOADER
   Ensures icons work on every page
========================================================= */

(function () {

    "use strict";

    /*
     * Check whether Font Awesome is already loaded.
     */

    const fontAwesomeLoaded =
        Array.from(
            document.querySelectorAll('link[rel="stylesheet"]')
        ).some(function (link) {

            return (
                link.href.includes("font-awesome") ||
                link.href.includes("fontawesome")
            );

        });


    /*
     * If Font Awesome is already available,
     * do nothing.
     */

    if (fontAwesomeLoaded) {

        console.log(
            "ShriVatsaDarbar: Font Awesome already loaded."
        );

        return;

    }


    /*
     * Load Font Awesome universally.
     */

    const fontAwesome =
        document.createElement("link");


    fontAwesome.rel =
        "stylesheet";


    fontAwesome.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";


    fontAwesome.onload = function () {

        console.log(
            "ShriVatsaDarbar: Font Awesome loaded."
        );

    };


    fontAwesome.onerror = function () {

        console.error(
            "ShriVatsaDarbar: Font Awesome failed to load."
        );

    };


    document.head.appendChild(
        fontAwesome
    );

})();


/* =========================================================
   SHRI VATSADARBAR
   UNIVERSAL CART LOADER
   Automatically loads cart.js on all pages
========================================================= */

(function () {

    "use strict";


    /*
     * Check whether cart.js is already included
     * on the current page.
     */

    const cartScriptExists =
        Array.from(
            document.querySelectorAll("script[src]")
        ).some(function (script) {

            return script.src.endsWith("/js/cart.js");

        });


    /*
     * If cart.js already exists on this page,
     * do nothing.
     *
     * This protects the Poshak page because
     * it already contains cart.js.
     */

    if (cartScriptExists) {

        console.log(
            "ShriVatsaDarbar: cart.js already included."
        );

        return;

    }


    /*
     * Find the current script.js file.
     */

    const currentScript =
        Array.from(
            document.querySelectorAll("script[src]")
        ).find(function (script) {

            return script.src.endsWith("/js/script.js");

        });


    if (!currentScript) {

        console.error(
            "ShriVatsaDarbar: script.js location not found."
        );

        return;

    }


    /*
     * Build the correct cart.js path
     * relative to script.js.
     */

    const cartURL =
        new URL(
            "cart.js",
            currentScript.src
        ).href;


    /*
     * Create cart.js script.
     */

    const cartScript =
        document.createElement("script");


    cartScript.src =
        cartURL;


    cartScript.onload = function () {

        console.log(
            "ShriVatsaDarbar: Universal cart loaded."
        );

    };


    cartScript.onerror = function () {

        console.error(
            "ShriVatsaDarbar: Unable to load cart.js."
        );

    };


    document.body.appendChild(
        cartScript
    );

})();


/* =========================================================
   SHARED MASTER FOOTER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const footerContainer = document.getElementById("site-footer");

    if (!footerContainer) {
        return;
    }

    fetch("/footer.html")
        .then(response => {

            if (!response.ok) {
                throw new Error("Unable to load footer.html");
            }

            return response.text();

        })
        .then(html => {

            footerContainer.innerHTML = html;

        })
        .catch(error => {

            console.error("Shared footer failed to load:", error);

        });

});
