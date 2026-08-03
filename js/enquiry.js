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
