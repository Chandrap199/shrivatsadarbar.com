/* =========================================================
   SHRI VATSADARBAR
   UNIVERSAL CART SYSTEM
   Version 1.0
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";

    /* =====================================================
       CART SETTINGS
    ===================================================== */

    const CART_STORAGE_KEY = "shriVatsaDarbarCart";

    const WHATSAPP_NUMBER = "918826196544";


    /* =====================================================
       PRODUCT PAGE DETECTION
    ===================================================== */

    const productImage =
        document.getElementById("mainProductImage");

    const productInformation =
        document.querySelector(".product-information");

    /*
     * If this is not a product page,
     * we still load the cart interface.
     */
    const isProductPage =
        !!productImage || !!productInformation;


    /* =====================================================
       CART DATA
    ===================================================== */

    function getCart() {

        try {

            const storedCart =
                localStorage.getItem(CART_STORAGE_KEY);

            if (!storedCart) {
                return [];
            }

            const parsedCart =
                JSON.parse(storedCart);

            return Array.isArray(parsedCart)
                ? parsedCart
                : [];

        } catch (error) {

            console.error(
                "ShriVatsaDarbar Cart: Unable to read cart.",
                error
            );

            return [];

        }

    }


    function saveCart(cart) {

        try {

            localStorage.setItem(
                CART_STORAGE_KEY,
                JSON.stringify(cart)
            );

        } catch (error) {

            console.error(
                "ShriVatsaDarbar Cart: Unable to save cart.",
                error
            );

        }

    }


    /* =====================================================
       PRODUCT INFORMATION
    ===================================================== */

    function getProductName() {

        /*
         * Product page H1 is the primary source.
         */

        const title =
            document.querySelector(
                ".product-title h1"
            );

        if (title && title.textContent.trim()) {

            return title.textContent.trim();

        }


        /*
         * Fallback to product information heading.
         */

        const informationTitle =
            document.querySelector(
                ".product-information h2"
            );

        if (
            informationTitle &&
            informationTitle.textContent.trim()
        ) {

            return informationTitle.textContent.trim();

        }


        /*
         * Final fallback.
         */

        return document.title
            .replace(
                "| ShriVatsaDarbar",
                ""
            )
            .trim();

    }


    function getProductImage() {

        if (
            productImage &&
            productImage.src
        ) {

            return productImage.src;

        }

        return "";

    }


    function getProductPrice() {

        /*
         * First look for the dynamic price.
         */

        const priceElement =
            document.getElementById(
                "productPrice"
            );

        if (
            priceElement &&
            priceElement.textContent.trim()
        ) {

            return priceElement.textContent.trim();

        }


        /*
         * Fallback for products without
         * dynamic pricing.
         */

        const staticPrice =
            document.querySelector(
                ".product-price"
            );

        if (
            staticPrice &&
            staticPrice.textContent.trim()
        ) {

            return staticPrice.textContent.trim();

        }


        return "Price on Request";

    }


    function getSelectedSize() {

        const activeSize =
            document.querySelector(
                ".size.active"
            );

        if (
            activeSize &&
            activeSize.textContent.trim()
        ) {

            return activeSize.textContent.trim();

        }

        return "Not Applicable";

    }


    /* =====================================================
       CREATE PRODUCT ID
    ===================================================== */

    function getProductId() {

        /*
         * Use the current product URL as the
         * unique identifier.
         */

        return window.location.pathname;

    }


    /* =====================================================
       ADD PRODUCT TO CART
    ===================================================== */

    function addCurrentProductToCart() {

        if (!isProductPage) {

            return;

        }


        const product = {

            id: getProductId(),

            name: getProductName(),

            image: getProductImage(),

            price: getProductPrice(),

            size: getSelectedSize(),

            quantity: 1,

            url: window.location.href

        };


        let cart =
            getCart();


        /*
         * Check whether the exact product
         * with the same size already exists.
         */

        const existingIndex =
            cart.findIndex(function (item) {

                return (
                    item.id === product.id &&
                    item.size === product.size
                );

            });


        if (existingIndex !== -1) {

            cart[existingIndex].quantity += 1;

        } else {

            cart.push(product);

        }


        saveCart(cart);

        updateCartUI();

        openCart();

    }


    /* =====================================================
       ADD CART BUTTON
    ===================================================== */

    function createAddToCartButton() {

        if (!isProductPage) {

            return;

        }


        /*
         * Don't create duplicate buttons.
         */

        if (
            document.getElementById(
                "universalAddToCart"
            )
        ) {

            return;

        }


        const information =
            document.querySelector(
                ".product-information"
            );


        if (!information) {

            return;

        }


        const button =
            document.createElement("button");


        button.type =
            "button";


        button.id =
            "universalAddToCart";


        button.className =
            "universal-add-to-cart";


        button.innerHTML = `

            <i class="fa-solid fa-cart-plus"></i>

            Add to Cart

        `;


        button.addEventListener(
            "click",
            function () {

                addCurrentProductToCart();

            }
        );


        /*
         * Place Add to Cart directly
         * after the existing WhatsApp button.
         */

        const whatsappButton =
            document.getElementById(
                "whatsapp-order"
            );


        if (whatsappButton) {

            whatsappButton.insertAdjacentElement(
                "afterend",
                button
            );

        } else {

            information.appendChild(
                button
            );

        }

    }


    /* =====================================================
       CREATE CART BUTTON IN HEADER
    ===================================================== */

    function createHeaderCartButton() {

        /*
         * Avoid duplicates.
         */

        if (
            document.getElementById(
                "universalCartButton"
            )
        ) {

            return;

        }


        const headerActions =
            document.querySelector(
                ".header-actions"
            );


        if (!headerActions) {

            return;

        }


        const cartButton =
            document.createElement("button");


        cartButton.type =
            "button";


        cartButton.id =
            "universalCartButton";


        cartButton.className =
            "icon-btn cart-header-button";


        cartButton.setAttribute(
            "aria-label",
            "Shopping Cart"
        );


        cartButton.innerHTML = `

            <i class="fa-solid fa-cart-shopping"></i>

            <span
                id="cartCount"
                class="cart-count">
                0
            </span>

        `;


        cartButton.addEventListener(
            "click",
            function () {

                openCart();

            }
        );


        /*
         * Put cart before the WhatsApp button.
         */

        const whatsappButton =
            headerActions.querySelector(
                ".whatsapp-btn"
            );


        if (whatsappButton) {

            headerActions.insertBefore(
                cartButton,
                whatsappButton
            );

        } else {

            headerActions.appendChild(
                cartButton
            );

        }

    }


    /* =====================================================
       CART COUNT
    ===================================================== */

    function updateCartCount() {

        const cart =
            getCart();


        const totalQuantity =
            cart.reduce(
                function (total, item) {

                    return (
                        total +
                        Number(item.quantity || 0)
                    );

                },
                0
            );


        const cartCount =
            document.getElementById(
                "cartCount"
            );


        if (cartCount) {

            cartCount.textContent =
                totalQuantity;

        }

    }


    /* =====================================================
       CREATE CART DRAWER
    ===================================================== */

    function createCartDrawer() {

        if (
            document.getElementById(
                "universalCartOverlay"
            )
        ) {

            return;

        }


        const overlay =
            document.createElement("div");


        overlay.id =
            "universalCartOverlay";


        overlay.className =
            "universal-cart-overlay";


        overlay.innerHTML = `

            <div
                class="universal-cart-panel"
                role="dialog"
                aria-modal="true"
                aria-label="Shopping Cart">

                <div class="universal-cart-header">

                    <div>

                        <span class="cart-label">
                            ShriVatsaDarbar
                        </span>

                        <h2>
                            Your Cart
                        </h2>

                    </div>

                    <button
                        type="button"
                        id="closeUniversalCart"
                        class="cart-close"
                        aria-label="Close Cart">

                        <i class="fa-solid fa-xmark"></i>

                    </button>

                </div>


                <div
                    id="universalCartItems"
                    class="universal-cart-items">

                </div>


                <div class="universal-cart-footer">

                    <div class="cart-summary">

                        <span>
                            Items
                        </span>

                        <strong id="cartTotalItems">
                            0
                        </strong>

                    </div>


                    <button
                        type="button"
                        id="sendCartWhatsApp"
                        class="cart-whatsapp-button">

                        <i class="fa-brands fa-whatsapp"></i>

                        Send Cart Enquiry on WhatsApp

                    </button>


                    <button
                        type="button"
                        id="clearUniversalCart"
                        class="cart-clear-button">

                        Clear Cart

                    </button>

                </div>

            </div>

        `;


        document.body.appendChild(
            overlay
        );


        /*
         * Close button.
         */

        const closeButton =
            document.getElementById(
                "closeUniversalCart"
            );


        closeButton.addEventListener(
            "click",
            closeCart
        );


        /*
         * Click outside drawer.
         */

        overlay.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === overlay
                ) {

                    closeCart();

                }

            }
        );


        /*
         * Clear cart.
         */

        const clearButton =
            document.getElementById(
                "clearUniversalCart"
            );


        clearButton.addEventListener(
            "click",
            function () {

                if (
                    !confirm(
                        "Are you sure you want to clear your cart?"
                    )
                ) {

                    return;

                }


                saveCart([]);

                updateCartUI();

            }
        );


        /*
         * WhatsApp checkout.
         */

        const whatsappButton =
            document.getElementById(
                "sendCartWhatsApp"
            );


        whatsappButton.addEventListener(
            "click",
            sendCartToWhatsApp
        );

    }


    /* =====================================================
       RENDER CART
    ===================================================== */

    function updateCartUI() {

        updateCartCount();


        const cart =
            getCart();


        const itemsContainer =
            document.getElementById(
                "universalCartItems"
            );


        const totalItems =
            document.getElementById(
                "cartTotalItems"
            );


        if (
            !itemsContainer ||
            !totalItems
        ) {

            return;

        }


        const totalQuantity =
            cart.reduce(
                function (total, item) {

                    return (
                        total +
                        Number(item.quantity || 0)
                    );

                },
                0
            );


        totalItems.textContent =
            totalQuantity;


        /*
         * Empty cart.
         */

        if (!cart.length) {

            itemsContainer.innerHTML = `

                <div class="empty-cart">

                    <div class="empty-cart-icon">
                        🛒
                    </div>

                    <h3>
                        Your Cart is Empty
                    </h3>

                    <p>
                        Add your favourite ShriVatsaDarbar
                        products to enquire together on WhatsApp.
                    </p>

                </div>

            `;

            return;

        }


        /*
         * Render products.
         */

        itemsContainer.innerHTML =
            cart.map(
                function (item, index) {

                    return `

                        <div
                            class="cart-item"
                            data-index="${index}">

                            <div class="cart-item-image">

                                ${
                                    item.image
                                        ? `
                                            <img
                                                src="${item.image}"
                                                alt="${escapeHTML(item.name)}">
                                          `
                                        : ""
                                }

                            </div>


                            <div class="cart-item-details">

                                <h3>
                                    ${escapeHTML(item.name)}
                                </h3>


                                ${
                                    item.size !== "Not Applicable"
                                        ? `
                                            <span class="cart-item-option">
                                                Size: ${escapeHTML(item.size)}
                                            </span>
                                          `
                                        : ""
                                }


                                <span class="cart-item-price">

                                    ${escapeHTML(item.price)}

                                </span>


                                <div class="cart-item-actions">

                                    <button
                                        type="button"
                                        class="cart-quantity-btn"
                                        data-action="decrease"
                                        data-index="${index}">
                                        −
                                    </button>

                                    <span class="cart-quantity">
                                        ${item.quantity}
                                    </span>

                                    <button
                                        type="button"
                                        class="cart-quantity-btn"
                                        data-action="increase"
                                        data-index="${index}">
                                        +
                                    </button>


                                    <button
                                        type="button"
                                        class="cart-remove-btn"
                                        data-action="remove"
                                        data-index="${index}">

                                        Remove

                                    </button>

                                </div>

                            </div>

                        </div>

                    `;

                }
            ).join("");


        /*
         * Quantity controls.
         */

        itemsContainer
            .querySelectorAll(
                ".cart-quantity-btn, .cart-remove-btn"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const index =
                                Number(
                                    this.dataset.index
                                );


                            const action =
                                this.dataset.action;


                            modifyCartItem(
                                index,
                                action
                            );

                        }
                    );

                }
            );

    }


    /* =====================================================
       MODIFY CART ITEM
    ===================================================== */

    function modifyCartItem(
        index,
        action
    ) {

        const cart =
            getCart();


        if (
            !cart[index]
        ) {

            return;

        }


        if (
            action === "increase"
        ) {

            cart[index].quantity += 1;

        }


        if (
            action === "decrease"
        ) {

            cart[index].quantity -= 1;


            if (
                cart[index].quantity <= 0
            ) {

                cart.splice(
                    index,
                    1
                );

            }

        }


        if (
            action === "remove"
        ) {

            cart.splice(
                index,
                1
            );

        }


        saveCart(cart);

        updateCartUI();

    }


    /* =====================================================
       OPEN CART
    ===================================================== */

    function openCart() {

        const overlay =
            document.getElementById(
                "universalCartOverlay"
            );


        if (!overlay) {

            return;

        }


        updateCartUI();


        overlay.classList.add(
            "active"
        );


        document.body.classList.add(
            "cart-open"
        );

    }


    /* =====================================================
       CLOSE CART
    ===================================================== */

    function closeCart() {

        const overlay =
            document.getElementById(
                "universalCartOverlay"
            );


        if (overlay) {

            overlay.classList.remove(
                "active"
            );

        }


        document.body.classList.remove(
            "cart-open"
        );

    }


    /* =====================================================
       SEND COMPLETE CART TO WHATSAPP
    ===================================================== */

    function sendCartToWhatsApp() {

        const cart =
            getCart();


        if (!cart.length) {

            alert(
                "Your cart is empty. Please add a product first."
            );

            return;

        }


        let message =
`🙏 Jai Shri Krishna

🛒 ShriVatsaDarbar Cart Enquiry

I would like to enquire about the following products:

`;


        cart.forEach(
            function (item, index) {

                message +=
`
${index + 1}. ${item.name}
`;

                if (
                    item.size !== "Not Applicable"
                ) {

                    message +=
`   📏 Size: ${item.size}
`;

                }

                message +=
`   🔢 Quantity: ${item.quantity}
   💰 Price: ${item.price}

`;

            }
        );


        message +=
`Please share:

✅ Availability
✅ Final Price
✅ Shipping Charges
✅ Dispatch Time

Thank you 🙏
ShriVatsaDarbar
`;


        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(
                message
            );


        window.open(
            whatsappURL,
            "_blank"
        );

    }


    /* =====================================================
       ESCAPE HTML
    ===================================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    createHeaderCartButton();

    createCartDrawer();

    createAddToCartButton();

    updateCartUI();


    console.log(
        "ShriVatsaDarbar: Universal cart initialized."
    );

});
