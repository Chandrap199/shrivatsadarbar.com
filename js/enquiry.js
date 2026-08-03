/*======================================================
        SHRIVATSADARBAR
        PREMIUM ENQUIRY POPUP
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const enquiryModal = document.getElementById("enquiryModal");

    if (!enquiryModal) return;

    const overlay = enquiryModal.querySelector(".enquiry-overlay");

    const closeBtn = document.getElementById("closeEnquiry");

    /* ======================================
            OPEN POPUP
    ====================================== */

    function openEnquiry() {

        enquiryModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    /* ======================================
            CLOSE POPUP
    ====================================== */

    function closeEnquiry() {

        enquiryModal.classList.remove("active");

        document.body.style.overflow = "";

    }

    /* ======================================
            CLOSE EVENTS
    ====================================== */

    closeBtn.addEventListener("click", closeEnquiry);

    overlay.addEventListener("click", closeEnquiry);

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeEnquiry();

        }

    });

    /* ======================================
            OPEN BUTTONS
    ====================================== */

    const enquiryButtons = document.querySelectorAll(".enquiry-btn");

    enquiryButtons.forEach(button => {

        button.addEventListener("click", (e) => {

            e.preventDefault();

            openEnquiry();

        });

    });

});
/*====================================================
        WHATSAPP FORM SUBMISSION
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("whatsappEnquiryForm");

    if (!form) return;

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const city = document.getElementById("customerCity").value.trim();
        const size = document.getElementById("customerSize").value;
        const colour = document.getElementById("customerColour").value.trim();
        const notes = document.getElementById("customerMessage").value.trim();

        if(name === "" || phone === "" || city === "" || size === ""){

            alert("Please complete all required fields.");

            return;

        }

        const productName =
            document.querySelector(".product-name")?.innerText ||
            "Premium Handmade Poshak";

        const message = `🙏 Jai Shri Krishna

Name: ${name}

Mobile: ${phone}

City / State: ${city}

Product: ${productName}

Size: ${size}

Preferred Colour: ${colour || "Not specified"}

Additional Notes:
${notes || "None"}

Please share the price, availability and delivery timeline.

Thank you. 🙏`;

        const whatsappURL =
        "https://wa.me/918826196544?text=" +
        encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});
