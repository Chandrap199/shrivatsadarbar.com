/* =========================================================
   SHRI VATSADARBAR
   POSHAK MASTER PRICING
   =========================================================

   This file controls:
   - Selling Price
   - MRP
   - Savings
   - Size-based price changes

   Products:
   Poshak 001 → 008

   Sizes:
   0 → 8

   ========================================================= */


const POSHAK_PRICING = {

    /* =====================================================
       POSHAK 001
    ===================================================== */

    "poshak-001": {

        0: { price: 50,  mrp: 100 },
        1: { price: 60,  mrp: 110 },
        2: { price: 70,  mrp: 120 },
        3: { price: 120, mrp: 170 },
        4: { price: 150, mrp: 200 },
        5: { price: 165, mrp: 215 },
        6: { price: 175, mrp: 225 },
        7: { price: 200, mrp: 250 },
        8: { price: 250, mrp: 300 }

    },


    /* =====================================================
       POSHAK 002
    ===================================================== */

    "poshak-002": {

        0: { price: 70,  mrp: 120 },
        1: { price: 90,  mrp: 140 },
        2: { price: 110, mrp: 160 },
        3: { price: 130, mrp: 180 },
        4: { price: 150, mrp: 200 },
        5: { price: 170, mrp: 220 },
        6: { price: 200, mrp: 250 },
        7: { price: 250, mrp: 300 },
        8: { price: 320, mrp: 370 }

    },


    /* =====================================================
       POSHAK 003
    ===================================================== */

    "poshak-003": {

        0: { price: 100, mrp: 150 },
        1: { price: 120, mrp: 170 },
        2: { price: 150, mrp: 200 },
        3: { price: 180, mrp: 230 },
        4: { price: 220, mrp: 270 },
        5: { price: 250, mrp: 300 },
        6: { price: 280, mrp: 330 },
        7: { price: 300, mrp: 350 },
        8: { price: 350, mrp: 400 }

    },


    /* =====================================================
       POSHAK 004
    ===================================================== */

    "poshak-004": {

        0: { price: 100, mrp: 150 },
        1: { price: 120, mrp: 170 },
        2: { price: 150, mrp: 200 },
        3: { price: 180, mrp: 230 },
        4: { price: 220, mrp: 270 },
        5: { price: 250, mrp: 300 },
        6: { price: 280, mrp: 330 },
        7: { price: 300, mrp: 350 },
        8: { price: 350, mrp: 400 }

    },


    /* =====================================================
       POSHAK 005
    ===================================================== */

    "poshak-005": {

        0: { price: 60,  mrp: 110 },
        1: { price: 70,  mrp: 120 },
        2: { price: 80,  mrp: 130 },
        3: { price: 120, mrp: 170 },
        4: { price: 150, mrp: 200 },
        5: { price: 180, mrp: 230 },
        6: { price: 200, mrp: 250 },
        7: { price: 210, mrp: 260 },
        8: { price: 280, mrp: 330 }

    },


    /* =====================================================
       POSHAK 006
    ===================================================== */

    "poshak-006": {

        0: { price: 60,  mrp: 110 },
        1: { price: 80,  mrp: 130 },
        2: { price: 90,  mrp: 140 },
        3: { price: 130, mrp: 180 },
        4: { price: 150, mrp: 200 },
        5: { price: 180, mrp: 230 },
        6: { price: 210, mrp: 260 },
        7: { price: 250, mrp: 300 },
        8: { price: 280, mrp: 330 }

    },


    /* =====================================================
       POSHAK 007
    ===================================================== */

    "poshak-007": {

        0: { price: 50,  mrp: 100 },
        1: { price: 60,  mrp: 110 },
        2: { price: 70,  mrp: 120 },
        3: { price: 120, mrp: 170 },
        4: { price: 150, mrp: 200 },
        5: { price: 170, mrp: 220 },
        6: { price: 185, mrp: 235 },
        7: { price: 200, mrp: 250 },
        8: { price: 250, mrp: 300 }

    },


    /* =====================================================
       POSHAK 008
    ===================================================== */

    "poshak-008": {

        0: { price: 100, mrp: 150 },
        1: { price: 120, mrp: 170 },
        2: { price: 150, mrp: 200 },
        3: { price: 180, mrp: 230 },
        4: { price: 220, mrp: 270 },
        5: { price: 250, mrp: 300 },
        6: { price: 280, mrp: 330 },
        7: { price: 300, mrp: 350 },
        8: { price: 350, mrp: 400 }

    }

};


/* =========================================================
   APPLY POSHAK PRICING
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DETECT CURRENT PRODUCT
    ===================================================== */

    const pageName = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");


    /* =====================================================
       CHECK PRODUCT EXISTS
    ===================================================== */

    if (!POSHAK_PRICING[pageName]) {

        console.warn(
            "Poshak pricing: No pricing found for",
            pageName
        );

        return;

    }


    const pricing = POSHAK_PRICING[pageName];


    /* =====================================================
       FIND HTML ELEMENTS
    ===================================================== */

    const sizeButtons =
        document.querySelectorAll(".size");


    const productPrice =
        document.getElementById("productPrice");


    const productMrp =
        document.querySelector(".product-mrp");


    const productSave =
        document.querySelector(".product-save");


    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!sizeButtons.length || !productPrice) {

        console.error(
            "Poshak pricing: Required price/size elements not found."
        );

        return;

    }


    /* =====================================================
       UPDATE PRICE
    ===================================================== */

    function updatePrice(size) {


        const selectedPricing =
            pricing[size];


        if (!selectedPricing) {

            console.error(
                "Poshak pricing: No pricing found for size",
                size,
                "on",
                pageName
            );

            return;

        }


        const sellingPrice =
            selectedPricing.price;


        const mrp =
            selectedPricing.mrp;


        const saving =
            mrp - sellingPrice;


        /* ================================================
           SELLING PRICE
        ================================================ */

        productPrice.textContent =
            `₹${sellingPrice}`;


        /* ================================================
           MRP
        ================================================ */

        if (productMrp) {

            productMrp.innerHTML =
                `MRP <span>₹${mrp}</span>`;

        }


        /* ================================================
           SAVINGS
        ================================================ */

        if (productSave) {

            productSave.textContent =
                `Save ₹${saving}`;

        }


        /* ================================================
           UPDATE WHATSAPP ORDER BUTTON DATA
        ================================================ */

        const whatsappButton =
            document.getElementById("whatsapp-order");


        if (whatsappButton) {

            whatsappButton.dataset.price =
                sellingPrice;

            whatsappButton.dataset.mrp =
                mrp;

            whatsappButton.dataset.size =
                size;

        }


        /* ================================================
           DEBUG LOG
        ================================================ */

        console.log(
            `Poshak Pricing → ${pageName} | Size ${size} | ₹${sellingPrice} | MRP ₹${mrp}`
        );

    }


    /* =====================================================
       SIZE BUTTON CLICK
    ===================================================== */

    sizeButtons.forEach(function (button) {


        button.addEventListener("click", function () {


            /* Remove active from all */

            sizeButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Add active to selected */

            this.classList.add("active");


            /* Get selected size */

            const selectedSize =
                this.textContent.trim();


            /* Update price */

            updatePrice(selectedSize);


        });

    });


    /* =====================================================
       INITIAL PRICE
    ===================================================== */

    const activeSize =
        document.querySelector(".size.active");


    if (activeSize) {

        updatePrice(
            activeSize.textContent.trim()
        );

    } else {

        /* If no size is active, use Size 0 */

        updatePrice("0");

    }


});


/* =========================================================
   END OF POSHAK MASTER PRICING
   ========================================================= */
