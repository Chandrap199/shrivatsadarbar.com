/* =========================================================
   SHRI VATSADARBAR
   POSHAK MASTER PRICING
   ========================================================= */

const POSHAK_PRICING = {

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
    }

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

};


/* =========================================================
   APPLY POSHAK PRICING
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const pageName = window.location.pathname
        .split("/")
        .pop()
        .replace(".html", "");

    if (!POSHAK_PRICING[pageName]) {
        return;
    }

    const pricing = POSHAK_PRICING[pageName];

    const sizeButtons = document.querySelectorAll(".size");

    const productPrice =
        document.getElementById("productPrice");

    const productMrp =
        document.querySelector(".product-mrp");

    const productSave =
        document.querySelector(".product-save");

    if (!sizeButtons.length || !productPrice) {

        console.error(
            "Poshak pricing: Required price/size elements not found."
        );

        return;
    }


    function updatePrice(size) {

        const selectedPricing = pricing[size];

        if (!selectedPricing) {

            console.error(
                "No pricing found for size:",
                size
            );

            return;
        }

        const sellingPrice = selectedPricing.price;
        const mrp = selectedPricing.mrp;
        const saving = mrp - sellingPrice;


        /* Selling Price */

        productPrice.textContent =
            `₹${sellingPrice}`;


        /* MRP */

        if (productMrp) {

            productMrp.innerHTML =
                `MRP <span>₹${mrp}</span>`;

        }


        /* Saving */

        if (productSave) {

            productSave.textContent =
                `Save ₹${saving}`;

        }

    }


    /* =====================================================
       SIZE BUTTONS
    ===================================================== */

    sizeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            sizeButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            const selectedSize =
                this.textContent.trim();

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

    }

});
