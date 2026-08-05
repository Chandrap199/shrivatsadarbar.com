/*======================================================
        SHRIVATSADARBAR
        PREMIUM ENQUIRY POPUP
======================================================*/

document.addEventListener("DOMContentLoaded", () => {

    const enquiryModal = document.getElementById("enquiryModal");

    if (!enquiryModal) return;

    const overlay = enquiryModal.querySelector(".enquiry-overlay");
const closeBtn = document.getElementById("closeEnquiry");

if (!overlay || !closeBtn) {
    console.error("Enquiry popup HTML is incomplete.");
    return;
}
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
console.log("Buttons found:", enquiryButtons.length);
    enquiryButtons.forEach(button => {

        button.addEventListener("click", (e) => {

    e.preventDefault();

    const productName = button.dataset.product;
    const productImage = button.dataset.image;

    document.getElementById("popupProductName").innerText = productName;

    document.getElementById("popupProductImage").src = productImage;

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
        const sizeField = document.getElementById("customerSize");
const size = sizeField ? sizeField.value : "";
        const colour = document.getElementById("customerColour").value.trim();
        const notes = document.getElementById("customerMessage").value.trim();

        if (name === "" || phone === "" || city === "") {

    alert("Please complete all required fields.");

    return;

}

if (sizeField && size === "") {

    alert("Please select a size.");

    return;

}
        const productName =
    document.getElementById("popupProductName").innerText;

 const sizeText = size
    ? `📏 Size
${size}

`
    : "";

const message = `🙏 Jai Shri Krishna

I would like to enquire about the following product.

━━━━━━━━━━━━━━━━━━

🛍 Product
${productName}

${sizeText}🎨 Preferred Colour
${colour || "Not specified"}

━━━━━━━━━━━━━━━━━━

👤 Customer Details

Name:
${name}

📞 Mobile:
${phone}

📍 City / State:
${city}

━━━━━━━━━━━━━━━━━━

📝 Additional Notes

${notes || "None"}

━━━━━━━━━━━━━━━━━━

Please share:

✅ Price

✅ Availability

✅ Estimated Dispatch Date (EDD)

Thank you 🙏

ShriVatsaDarbar

We look forward to serving you. 🌸`;
            
        const whatsappURL =
        "https://wa.me/918826196544?text=" +
        encodeURIComponent(message);

        window.open(whatsappURL, "_blank");
enquiryModal.classList.remove("active");
document.body.style.overflow = "";
form.reset();
    });

});
