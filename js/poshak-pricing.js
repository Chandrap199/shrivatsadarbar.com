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
    }

};


/* =========================================================
   APPLY POSHAK PRICING
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       Identify current Poshak from URL
    ----------------------------------------- */

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


    /* =====================================================
       UPDATE PRICE DISPLAY
    ===================================================== */

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

            /* Remove active */

            sizeButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            /* Activate selected size */

            this.classList.add("active");


            /* Get size */

            const selectedSize =
                this.textContent.trim();


            /* Update pricing */

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
