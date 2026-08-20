/*======================================================
        SHRIVATSADARBAR
        PREMIUM ENQUIRY SYSTEM
        FINAL MASTER VERSION
======================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FIND OR CREATE ENQUIRY MODAL
    ===================================================== */

    let enquiryModal = document.getElementById("enquiryModal");


    /*
       Some collection pages already contain the popup.
       Others only contain the enquiry button.

       If the popup does not exist, create it automatically.
    */

    if (!enquiryModal) {

        enquiryModal = document.createElement("div");

        enquiryModal.id = "enquiryModal";
        enquiryModal.className = "enquiry-modal";

        enquiryModal.innerHTML = `

            <div class="enquiry-overlay"></div>

            <div class="enquiry-container">

                <button
                    type="button"
                    class="close-enquiry"
                    id="closeEnquiry"
                    aria-label="Close enquiry">

                    <i class="fa-solid fa-xmark"></i>

                </button>

                <div class="enquiry-product">

                    <span class="enquiry-tag">
                        ✨ ShriVatsa Signature Collection
                    </span>

                    <img
                        id="popupProductImage"
                        src=""
                        alt="Product">

                    <h3 id="popupProductName">
                        Product Enquiry
                    </h3>

                    <p>
                        Handmade with devotion for Laddu Gopal Ji.
                    </p>

                </div>

                <div class="enquiry-form">

                    <h2>
                        Premium Enquiry
                    </h2>

                    <p>
                        Please share a few details.
                        We'll prepare your enquiry and continue on WhatsApp.
                    </p>

                    <form id="whatsappEnquiryForm">

                        <div class="form-group">

                            <label>
                                Full Name *
                            </label>

                            <input
                                type="text"
                                id="customerName"
                                placeholder="Enter your full name"
                                required>

                        </div>

                        <div class="form-group">

                            <label>
                                Mobile Number *
                            </label>

                            <input
                                type="tel"
                                id="customerPhone"
                                placeholder="10-digit mobile number"
                                required>

                        </div>

                        <div class="form-group">

                            <label>
                                City / State *
                            </label>

                            <input
                                type="text"
                                id="customerCity"
                                placeholder="City / State"
                                required>

                        </div>

                        <div class="form-group">

                            <label>
                                Select Size
                            </label>

                            <select id="customerSize">

                                <option value="">
                                    Choose Size
                                </option>

                                <option value="0">Size 0</option>
                                <option value="1">Size 1</option>
                                <option value="2">Size 2</option>
                                <option value="3">Size 3</option>
                                <option value="4">Size 4</option>
                                <option value="5">Size 5</option>
                                <option value="6">Size 6</option>
                                <option value="7">Size 7</option>
                                <option value="8">Size 8</option>

                            </select>

                        </div>

                        <div class="form-group">

                            <label>
                                Preferred Colour
                            </label>

                            <input
                                type="text"
                                id="customerColour"
                                placeholder="Example: Yellow, Red, White">

                        </div>

                        <div class="form-group">

                            <label>
                                Additional Notes
                            </label>

                            <textarea
                                id="customerMessage"
                                rows="4"
                                placeholder="Tell us anything you'd like us to know..."></textarea>

                        </div>

                        <div class="privacy-note">

                            🔒 Your information is used only to process your enquiry.

                        </div>

                        <button
                            type="submit"
                            class="continue-whatsapp-btn">

                            <i class="fa-brands fa-whatsapp"></i>

                            Continue to WhatsApp

                        </button>

                    </form>

                </div>

            </div>
        `;

        document.body.appendChild(enquiryModal);

    }


    /* =====================================================
       GET ELEMENTS
    ===================================================== */

    const overlay =
        enquiryModal.querySelector(".enquiry-overlay");

    const closeBtn =
        enquiryModal.querySelector("#closeEnquiry");

    const form =
        enquiryModal.querySelector("#whatsappEnquiryForm");

    const popupProductName =
        enquiryModal.querySelector("#popupProductName");

    const popupProductImage =
        enquiryModal.querySelector("#popupProductImage");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!overlay || !closeBtn || !form) {

        console.error(
            "ShriVatsaDarbar Enquiry System: Popup elements missing."
        );

        return;

    }


    /* =====================================================
       CURRENT PRODUCT
    ===================================================== */

    let currentProduct = {
        name: "Product Enquiry",
        image: ""
    };


    /* =====================================================
       OPEN ENQUIRY
    ===================================================== */

    function openEnquiry(productName, productImage) {

        currentProduct.name =
            productName || "Product Enquiry";

        currentProduct.image =
            productImage || "";


        if (popupProductName) {

            popupProductName.textContent =
                currentProduct.name;

        }


        if (popupProductImage) {

            if (currentProduct.image) {

                popupProductImage.src =
                    currentProduct.image;

                popupProductImage.style.display =
                    "block";

            } else {

                popupProductImage.removeAttribute("src");

                popupProductImage.style.display =
                    "none";

            }

        }


        enquiryModal.classList.add("active");

        document.body.style.overflow =
            "hidden";


        console.log(
            "ShriVatsaDarbar enquiry opened:",
            currentProduct.name
        );

    }


    /* =====================================================
       CLOSE ENQUIRY
    ===================================================== */

    function closeEnquiry() {

        enquiryModal.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    closeBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            closeEnquiry();

        }
    );


    /* =====================================================
       CLOSE OVERLAY
    ===================================================== */

    overlay.addEventListener(
        "click",
        function () {

            closeEnquiry();

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
                enquiryModal.classList.contains("active")
            ) {

                closeEnquiry();

            }

        }
    );


    /* =====================================================
       ENQUIRY BUTTONS
    ===================================================== */

    const enquiryButtons =
        document.querySelectorAll(".enquiry-btn");


    console.log(
        "ShriVatsaDarbar enquiry buttons found:",
        enquiryButtons.length
    );


    enquiryButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();
                    event.stopPropagation();


                    const productName =
                        button.dataset.product ||
                        "Product Enquiry";


                    const productImage =
                        button.dataset.image ||
                        "";


                    openEnquiry(
                        productName,
                        productImage
                    );

                }
            );

        }
    );


    /* =====================================================
       WHATSAPP FORM SUBMISSION
    ===================================================== */

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();
            event.stopPropagation();


            /* ---------------------------------------------
               CUSTOMER DETAILS
            --------------------------------------------- */

            const nameField =
                form.querySelector("#customerName");

            const phoneField =
                form.querySelector("#customerPhone");

            const cityField =
                form.querySelector("#customerCity");

            const sizeField =
                form.querySelector("#customerSize");

            const colourField =
                form.querySelector("#customerColour");

            const notesField =
                form.querySelector("#customerMessage");


            const name =
                nameField
                    ? nameField.value.trim()
                    : "";


            const phone =
                phoneField
                    ? phoneField.value.trim()
                    : "";


            const city =
                cityField
                    ? cityField.value.trim()
                    : "";


            const size =
                sizeField
                    ? sizeField.value.trim()
                    : "";


            const colour =
                colourField
                    ? colourField.value.trim()
                    : "";


            const notes =
                notesField
                    ? notesField.value.trim()
                    : "";


            /* ---------------------------------------------
               VALIDATION
            --------------------------------------------- */

            if (!name || !phone || !city) {

                alert(
                    "Please complete your Name, Mobile Number and City / State."
                );

                return;

            }


            /* ---------------------------------------------
               PRODUCT
            --------------------------------------------- */

            const productName =
                currentProduct.name ||
                (
                    popupProductName
                        ? popupProductName.textContent.trim()
                        : "Product Enquiry"
                );


            /* ---------------------------------------------
               SIZE
            --------------------------------------------- */

            const sizeText =
                size
                    ? `📏 Size:
${size}

`
                    : "";


            /* ---------------------------------------------
               WHATSAPP MESSAGE
            --------------------------------------------- */

            const message =
`🙏 Jai Shri Krishna

I would like to enquire about the following product.

━━━━━━━━━━━━━━━━━━

🛍 Product:
${productName}

${sizeText}🎨 Preferred Colour:
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


            /* ---------------------------------------------
               WHATSAPP
            --------------------------------------------- */

            const phoneNumber =
                "918826196544";


            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);


            console.log(
                "Opening WhatsApp enquiry:",
                whatsappURL
            );


            /*
               IMPORTANT:
               Open WhatsApp directly from the submit event.
               This avoids popup-blocker problems.
            */

            window.open(
                whatsappURL,
                "_blank"
            );


            /* ---------------------------------------------
               CLOSE + RESET
            --------------------------------------------- */

            closeEnquiry();

            form.reset();

        }
    );

});
