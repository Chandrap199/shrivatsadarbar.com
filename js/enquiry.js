/*======================================================
        SHRIVATSADARBAR
        PREMIUM ENQUIRY SYSTEM
        MASTER VERSION
======================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       FIND EXISTING ENQUIRY MODAL
    ===================================================== */

    let enquiryModal =
        document.getElementById("enquiryModal");


    /* =====================================================
       CREATE MODAL IF PAGE DOES NOT HAVE ONE
       This allows all collection pages to use the
       same enquiry system without manually adding
       modal HTML to every page.
    ===================================================== */

    if (!enquiryModal) {

        enquiryModal = document.createElement("div");

        enquiryModal.id = "enquiryModal";

        enquiryModal.innerHTML = `

            <div class="enquiry-overlay"></div>

            <div class="enquiry-modal">

                <button
                    type="button"
                    class="enquiry-close"
                    id="closeEnquiry"
                    aria-label="Close enquiry">

                    &times;

                </button>

                <div class="enquiry-header">

                    <span class="section-tag">
                        ✨ Product Enquiry
                    </span>

                    <h2>
                        Enquire About This Product
                    </h2>

                    <p>
                        Share your details and we'll help you
                        with price, availability and delivery.
                    </p>

                </div>

                <div class="enquiry-product">

                    <img
                        id="popupProductImage"
                        src=""
                        alt="Product">

                    <div class="enquiry-product-info">

                        <h3 id="popupProductName">
                            Product
                        </h3>

                    </div>

                </div>

                <form id="whatsappEnquiryForm">

                    <div class="enquiry-field">

                        <label for="customerName">
                            Name *
                        </label>

                        <input
                            type="text"
                            id="customerName"
                            placeholder="Enter your name"
                            required>

                    </div>

                    <div class="enquiry-field">

                        <label for="customerPhone">
                            Mobile Number *
                        </label>

                        <input
                            type="tel"
                            id="customerPhone"
                            placeholder="Enter your mobile number"
                            required>

                    </div>

                    <div class="enquiry-field">

                        <label for="customerCity">
                            City / State *
                        </label>

                        <input
                            type="text"
                            id="customerCity"
                            placeholder="Enter your city / state"
                            required>

                    </div>

                    <div class="enquiry-field">

                        <label for="customerSize">
                            Size
                        </label>

                        <select id="customerSize">

                            <option value="">
                                Select Size
                            </option>

                            <option value="0">
                                Size 0
                            </option>

                            <option value="1">
                                Size 1
                            </option>

                            <option value="2">
                                Size 2
                            </option>

                            <option value="3">
                                Size 3
                            </option>

                            <option value="4">
                                Size 4
                            </option>

                            <option value="5">
                                Size 5
                            </option>

                            <option value="6">
                                Size 6
                            </option>

                            <option value="7">
                                Size 7
                            </option>

                            <option value="8">
                                Size 8
                            </option>

                        </select>

                    </div>

                    <div class="enquiry-field">

                        <label for="customerColour">
                            Preferred Colour
                        </label>

                        <input
                            type="text"
                            id="customerColour"
                            placeholder="Optional">

                    </div>

                    <div class="enquiry-field">

                        <label for="customerMessage">
                            Additional Notes
                        </label>

                        <textarea
                            id="customerMessage"
                            rows="4"
                            placeholder="Anything else you'd like to tell us?"></textarea>

                    </div>

                    <button
                        type="submit"
                        class="enquiry-submit">

                        💬 Continue on WhatsApp

                    </button>

                </form>

            </div>
        `;

        document.body.appendChild(enquiryModal);

    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const overlay =
        enquiryModal.querySelector(".enquiry-overlay");

    const closeBtn =
        document.getElementById("closeEnquiry");

    const form =
        document.getElementById("whatsappEnquiryForm");

    const popupProductName =
        document.getElementById("popupProductName");

    const popupProductImage =
        document.getElementById("popupProductImage");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (!overlay || !closeBtn || !form) {

        console.error(
            "ShriVatsaDarbar Enquiry System: Required elements missing."
        );

        return;

    }


    /* =====================================================
       OPEN ENQUIRY
    ===================================================== */

    function openEnquiry(productName, productImage) {

        if (popupProductName) {

            popupProductName.textContent =
                productName || "Product";

        }

        if (popupProductImage) {

            if (productImage) {

                popupProductImage.src =
                    productImage;

                popupProductImage.style.display =
                    "block";

            } else {

                popupProductImage.style.display =
                    "none";

            }

        }

        enquiryModal.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE ENQUIRY
    ===================================================== */

    function closeEnquiry() {

        enquiryModal.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       CLOSE BUTTON
    ===================================================== */

    closeBtn.addEventListener(
        "click",
        closeEnquiry
    );


    /* =====================================================
       CLOSE OVERLAY
    ===================================================== */

    overlay.addEventListener(
        "click",
        closeEnquiry
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
       Works across ALL collection pages
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


            /* ---------------------------------------------
               CUSTOMER DETAILS
            --------------------------------------------- */

            const name =
                document
                    .getElementById("customerName")
                    .value
                    .trim();


            const phone =
                document
                    .getElementById("customerPhone")
                    .value
                    .trim();


            const city =
                document
                    .getElementById("customerCity")
                    .value
                    .trim();


            const sizeField =
                document.getElementById(
                    "customerSize"
                );


            const size =
                sizeField
                    ? sizeField.value.trim()
                    : "";


            const colourField =
                document.getElementById(
                    "customerColour"
                );


            const colour =
                colourField
                    ? colourField.value.trim()
                    : "";


            const notesField =
                document.getElementById(
                    "customerMessage"
                );


            const notes =
                notesField
                    ? notesField.value.trim()
                    : "";


            /* ---------------------------------------------
               VALIDATION
            --------------------------------------------- */

            if (
                name === "" ||
                phone === "" ||
                city === ""
            ) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            /* ---------------------------------------------
               PRODUCT
            --------------------------------------------- */

            const productName =
                popupProductName
                    ? popupProductName.textContent.trim()
                    : "Product Enquiry";


            /* ---------------------------------------------
               SIZE TEXT
            --------------------------------------------- */

            const sizeText =
                size
                    ? `📏 Size
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
