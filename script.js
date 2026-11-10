
/* =========================================
   MEHEDI STORE - MAIN JAVASCRIPT
========================================= */

/* 1. PRODUCT DATABASE (DEMO) */

const products = [
    {
        id: 1,
        name: "Premium Classic Wrist Watch",
        category: "Fashion",
        price: 2500,
        oldPrice: 3200,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
        description: "A stylish classic wristwatch designed for everyday elegance.",
        stock: 10,
        featured: true,
        best: true,
        rating: 4.8,
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 3500,
        oldPrice: 4200,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
        description: "Enjoy your favorite music with comfortable wireless headphones.",
        stock: 8,
        featured: true,
        best: true,
        rating: 4.7,
        tag: "Popular"
    },
    {
        id: 3,
        name: "Premium Skincare Collection",
        category: "Beauty",
        price: 1800,
        oldPrice: 2200,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700",
        description: "A carefully selected skincare collection for your beauty routine.",
        stock: 5,
        featured: true,
        best: false,
        rating: 4.6,
        tag: "New"
    },
    {
        id: 4,
        name: "Modern Home Decoration",
        category: "Home",
        price: 2200,
        oldPrice: 2800,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700",
        description: "Beautiful home decoration to refresh your living space.",
        stock: 12,
        featured: true,
        best: true,
        rating: 4.5,
        tag: "Featured"
    },
    {
        id: 5,
        name: "Minimal Leather Backpack",
        category: "Fashion",
        price: 1900,
        oldPrice: 2500,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
        description: "A versatile backpack with a clean, modern design.",
        stock: 6,
        featured: true,
        best: false,
        rating: 4.6,
        tag: "Popular"
    },
    {
        id: 6,
        name: "Smart Wireless Earbuds",
        category: "Electronics",
        price: 1600,
        oldPrice: 2000,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700",
        description: "Compact wireless earbuds for everyday listening.",
        stock: 15,
        featured: false,
        best: true,
        rating: 4.5,
        tag: "Hot"
    },
    {
        id: 7,
        name: "Luxury Perfume Collection",
        category: "Beauty",
        price: 2800,
        oldPrice: 3500,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=700",
        description: "An elegant fragrance collection for special moments.",
        stock: 7,
        featured: false,
        best: true,
        rating: 4.8,
        tag: "Premium"
    },
    {
        id: 8,
        name: "Elegant Table Lamp",
        category: "Home",
        price: 1450,
        oldPrice: 1800,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700",
        description: "A decorative lamp that adds warmth to your room.",
        stock: 9,
        featured: false,
        best: false,
        rating: 4.4,
        tag: "New"
    },
    {
        id: 9,
        name: "Premium Casual Sneakers",
        category: "Fashion",
        price: 3200,
        oldPrice: 3900,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700",
        description: "Comfortable casual sneakers with a contemporary look.",
        stock: 4,
        featured: false,
        best: true,
        rating: 4.7,
        tag: "Popular"
    },
    {
        id: 10,
        name: "Professional Camera",
        category: "Electronics",
        price: 18500,
        oldPrice: 21000,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700",
        description: "A versatile camera for photography and creative projects.",
        stock: 3,
        featured: false,
        best: false,
        rating: 4.9,
        tag: "Premium"
    },
    {
        id: 11,
        name: "Modern Makeup Essentials",
        category: "Beauty",
        price: 1250,
        oldPrice: 1600,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",
        description: "Everyday makeup essentials for your personal collection.",
        stock: 11,
        featured: false,
        best: false,
        rating: 4.5,
        tag: "New"
    },
    {
        id: 12,
        name: "Premium Sofa Cushion",
        category: "Home",
        price: 850,
        oldPrice: 1100,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700",
        description: "Soft decorative cushions to add comfort to your home.",
        stock: 0,
        featured: false,
        best: false,
        rating: 4.3,
        tag: "Sale"
    }
];


/* 2. LOCAL STORAGE */

function getStorage(key, fallback = []) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value ?? fallback;
    } catch {
        return fallback;
    }
}

let cart = getStorage("mehedi_cart");
let wishlist = getStorage("mehedi_wishlist");
let currentUser = getStorage("mehedi_user", null);
let orders = getStorage("mehedi_orders");

function saveData() {
    localStorage.setItem("mehedi_cart", JSON.stringify(cart));
    localStorage.setItem("mehedi_wishlist", JSON.stringify(wishlist));
    localStorage.setItem("mehedi_orders", JSON.stringify(orders));
    localStorage.setItem("mehedi_user", JSON.stringify(currentUser));
}


/* 3. COMMON FUNCTIONS */

const $ = selector => document.querySelector(selector);

const money = amount =>
    "৳" + Number(amount).toLocaleString("en-BD");

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function showToast(message) {
    const toast = $("#toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

function getProduct(id) {
    return products.find(product => product.id === Number(id));
}

function updateCounts() {
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

    $("#cartCount").textContent = cartCount;
    $("#wishlistCount").textContent = wishlist.length;
}


/* 4. NAVIGATION */

function showPage(pageName) {
    const target = document.getElementById("page-" + pageName);

    if (!target) pageName = "home";

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById("page-" + pageName).classList.add("active");

    document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageName
        );
    });

    document.getElementById("navigation").classList.remove("open");

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (pageName === "cart") renderCart();
    if (pageName === "wishlist") renderWishlist();
    if (pageName === "account") renderAccount();
    if (pageName === "checkout") renderCheckoutSummary();
    if (pageName === "shop") renderShop();

    history.replaceState(null, "", "#" + pageName);
}

document.addEventListener("click", event => {

    const pageButton = event.target.closest("[data-page]");

    if (pageButton) {
        event.preventDefault();
        showPage(pageButton.dataset.page);
        return;
    }

    const categoryButton = event.target.closest("[data-category]");

    if (categoryButton) {
        event.preventDefault();
        selectedCategory = categoryButton.dataset.category;
        searchQuery = "";
        showPage("shop");
        renderShop();
    }
});


/* 5. PRODUCT CARD DESIGN */

function productCard(product) {

    const isSaved = wishlist.includes(product.id);

    return `
        <article class="product-card">

            <div class="product-image"
                 data-action="details"
                 data-id="${product.id}">

                <img src="${product.image}"
                     alt="${escapeHTML(product.name)}"
                     loading="lazy">

                ${product.tag ? `
                    <span class="product-tag">
                        ${escapeHTML(product.tag)}
                    </span>` : ""}

            </div>

            <button class="wishlist-btn ${isSaved ? "active" : ""}"
                    data-action="wishlist"
                    data-id="${product.id}"
                    aria-label="Toggle wishlist">
                <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart"></i>
            </button>

            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h3 data-action="details" data-id="${product.id}">
                    ${escapeHTML(product.name)}
                </h3>

                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating}
                    <span>Customer rating</span>
                </div>

                <div class="product-price">
                    ${money(product.price)}
                    <span class="product-old-price">
                        ${money(product.oldPrice)}
                    </span>
                </div>

                <button class="add-cart-btn"
                        data-action="add"
                        data-id="${product.id}"
                        ${product.stock <= 0 ? "disabled" : ""}>
                    <i class="fa-solid fa-bag-shopping"></i>
                    ${product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>

            </div>
        </article>
    `;
}


/* 6. HOME PAGE PRODUCTS */

function renderHome() {

    $("#featuredProducts").innerHTML = products
        .filter(product => product.featured)
        .slice(0, 4)
        .map(productCard)
        .join("");

    $("#bestProducts").innerHTML = products
        .filter(product => product.best)
        .slice(0, 4)
        .map(productCard)
        .join("");
}


/* 7. SHOP FILTER SYSTEM */

let selectedCategory = "";
let searchQuery = "";
let minPriceValue = "";
let maxPriceValue = "";

function renderCategoryFilters() {

    const categories = [...new Set(
        products.map(product => product.category)
    )];

    $("#categoryFilters").innerHTML = `
        <label class="category-filter">
            <input type="radio" name="categoryFilter"
                   value="" ${selectedCategory === "" ? "checked" : ""}>
            All Categories
        </label>

        ${categories.map(category => `
            <label class="category-filter">
                <input type="radio" name="categoryFilter"
                    value="${escapeHTML(category)}"
                    ${selectedCategory === category ? "checked" : ""}>
                ${escapeHTML(category)}
            </label>
        `).join("")}
    `;

}

function getFilteredProducts() {

    let result = [...products];

    if (selectedCategory) {
        result = result.filter(product =>
            product.category === selectedCategory
        );
    }

    if (searchQuery) {
        result = result.filter(product =>
            product.name.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery)
        );
    }

    if (minPriceValue !== "") {
        result = result.filter(product =>
            product.price >= Number(minPriceValue)
        );
    }

    if (maxPriceValue !== "") {
        result = result.filter(product =>
            product.price <= Number(maxPriceValue)
        );
    }

    if ($("#stockFilter").checked) {
        result = result.filter(product => product.stock > 0);
    }

    const sorting = $("#sortSelect").value;

    if (sorting === "low") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sorting === "high") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sorting === "name") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
}

function renderShop() {

    renderCategoryFilters();

    const result = getFilteredProducts();

    $("#shopProducts").innerHTML = result.map(productCard).join("");

    $("#resultCount").textContent =
        `Showing ${result.length} of ${products.length} products`;

    $("#shopTitle").textContent =
        selectedCategory || (searchQuery ? "Search Results" : "All Products");

    $("#emptyProducts").classList.toggle("hidden", result.length !== 0);

    const tags = [];

    if (selectedCategory) tags.push("Category: " + selectedCategory);
    if (searchQuery) tags.push("Search: " + searchQuery);
    if (minPriceValue !== "") tags.push("Minimum: " + money(minPriceValue));
    if (maxPriceValue !== "") tags.push("Maximum: " + money(maxPriceValue));

    $("#activeFilters").innerHTML = tags.map(tag =>
        `<span class="filter-tag">${escapeHTML(tag)}</span>`
    ).join("");

}


/* 8. SEARCH */

$("#searchForm").addEventListener("submit", event => {

    event.preventDefault();

    searchQuery = $("#searchInput").value.trim().toLowerCase();
    selectedCategory = "";

    showPage("shop");
    renderShop();

});

$("#searchInput").addEventListener("input", event => {
    if (!event.target.value.trim()) return;
});


/* 9. FILTER EVENTS */

$("#categoryFilters").addEventListener("change", event => {

    if (event.target.name === "categoryFilter") {
        selectedCategory = event.target.value;
        renderShop();
    }

});

$("#applyPrice").addEventListener("click", () => {

    const min = $("#minPrice").value;
    const max = $("#maxPrice").value;

    if (min !== "" && Number(min) < 0 ||
        max !== "" && Number(max) < 0) {
        showToast("Price cannot be negative.");
        return;
    }

    if (min !== "" && max !== "" && Number(min) > Number(max)) {
        showToast("Minimum price cannot exceed maximum price.");
        return;
    }

    minPriceValue = min;
    maxPriceValue = max;

    renderShop();

});

$("#sortSelect").addEventListener("change", renderShop);
$("#stockFilter").addEventListener("change", renderShop);

$("#filterToggle").addEventListener("click", () => {
    $("#filterSidebar").classList.toggle("show");
});

function clearFilters() {

    selectedCategory = "";
    searchQuery = "";
    minPriceValue = "";
    maxPriceValue = "";

    $("#searchInput").value = "";
    $("#minPrice").value = "";
    $("#maxPrice").value = "";
    $("#stockFilter").checked = false;
    $("#sortSelect").value = "default";

    renderShop();

}

$("#clearFilters").addEventListener("click", clearFilters);
$("#resetShop").addEventListener("click", clearFilters);


/* 10. CART SYSTEM */

function addToCart(id, quantity = 1) {

    const product = getProduct(id);

    if (!product || product.stock <= 0) {
        showToast("This product is unavailable.");
        return;
    }

    const existing = cart.find(item => item.id === product.id);

    const currentQuantity = existing ? existing.quantity : 0;

    if (currentQuantity + quantity > product.stock) {
        showToast("Sorry, available stock is limited.");
        return;
    }

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            quantity: quantity
        });
    }

    saveData();
    updateCounts();

    showToast("Product added to your cart!");
}

function changeQuantity(id, change) {

    const item = cart.find(item => item.id === Number(id));
    if (!item) return;

    const product = getProduct(id);
    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }

    if (newQuantity > product.stock) {
        showToast("No more stock available.");
        return;
    }

    item.quantity = newQuantity;

    saveData();
    updateCounts();
    renderCart();

}

function removeFromCart(id) {

    cart = cart.filter(item => item.id !== Number(id));

    saveData();
    updateCounts();
    renderCart();

    showToast("Product removed from cart.");

}

function cartTotal() {

    return cart.reduce((total, item) => {
        const product = getProduct(item.id);

        return total + (product ? product.price * item.quantity : 0);
    }, 0);

}

function renderCart() {

    const container = $("#cartItems");

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <h3>Your Cart is Empty</h3>
                <p>You haven't added any products yet.</p>
                <button class="btn btn-dark" data-page="shop">
                    Start Shopping
                </button>
            </div>
        `;

        $("#cartSummary").innerHTML = `
            <h2>Order Summary</h2>
            <p>Your cart is currently empty.</p>
        `;

        return;
    }

    container.innerHTML = cart.map(item => {

        const product = getProduct(item.id);
        if (!product) return "";

        return `
            <div class="cart-item">

                <img src="${product.image}" alt="${escapeHTML(product.name)}">

                <div>
                    <h3>${escapeHTML(product.name)}</h3>
                    <p>${money(product.price)} each</p>

                    <div class="cart-item-actions">
                        <button data-action="decrease" data-id="${product.id}">−</button>
                        <span>${item.quantity}</span>
                        <button data-action="increase" data-id="${product.id}">+</button>
                        <button class="remove-item" data-action="remove" data-id="${product.id}">
                            Remove
                        </button>
                    </div>
                </div>

                <div class="cart-item-price">
                    ${money(product.price * item.quantity)}
                </div>

            </div>
        `;

    }).join("");

    const subtotal = cartTotal();
    const delivery = subtotal >= 2000 ? 0 : 100;

    $("#cartSummary").innerHTML = `
        <h2>Order Summary</h2>

        <div class="summary-row">
            <span>Subtotal</span><strong>${money(subtotal)}</strong>
        </div>

        <div class="summary-row">
            <span>Delivery Charge</span>
            <strong>${delivery === 0 ? "Free" : money(delivery)}</strong>
        </div>

        <div class="summary-row total">
            <span>Total</span><strong>${money(subtotal + delivery)}</strong>
        </div>

        <button class="btn btn-dark full-btn" data-page="checkout">
            Proceed to Checkout
        </button>

        <button class="btn btn-light full-btn" data-page="shop">
            Continue Shopping
        </button>
    `;

}


/* 11. WISHLIST */

function toggleWishlist(id) {

    id = Number(id);

    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
        showToast("Removed from wishlist.");
    } else {
        wishlist.push(id);
        showToast("Added to wishlist.");
    }

    saveData();
    updateCounts();
    renderHome();

    if ($("#page-shop").classList.contains("active")) renderShop();
    if ($("#page-wishlist").classList.contains("active")) renderWishlist();

}

function renderWishlist() {

    const savedProducts = products.filter(product =>
        wishlist.includes(product.id)
    );

    $("#wishlistProducts").innerHTML = savedProducts.map(productCard).join("");

    $("#emptyWishlist").classList.toggle(
        "hidden",
        savedProducts.length > 0
    );

}


/* 12. PRODUCT DETAILS */

function showProductDetails(id) {

    const product = getProduct(id);

    if (!product) return;

    $("#productDetails").innerHTML = `

        <div class="detail-layout">

            <div class="detail-image">
                <img src="${product.image}" alt="${escapeHTML(product.name)}">
            </div>

            <div class="detail-info">

                <span class="eyebrow">${escapeHTML(product.category)}</span>

                <h1>${escapeHTML(product.name)}</h1>

                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    ${product.rating} / 5
                </div>

                <div class="detail-price">
                    ${money(product.price)}
                    <span class="product-old-price">${money(product.oldPrice)}</span>
                </div>

                <p class="detail-description">
                    ${escapeHTML(product.description)}
                </p>

                <p class="stock-note">
                    ${product.stock > 0
                        ? `Available Stock: ${product.stock}`
                        : "Currently Out of Stock"}
                </p>

                <div class="quantity-control">
                    <button id="detailMinus">−</button>
                    <span id="detailQuantity">1</span>
                    <button id="detailPlus">+</button>
                </div>

                <div class="detail-actions">
                    <button class="btn btn-dark" id="detailAdd"
                        ${product.stock <= 0 ? "disabled" : ""}>
                        Add to Cart
                    </button>

                    <button class="btn btn-light" id="detailWishlist">
                        <i class="fa-regular fa-heart"></i> Wishlist
                    </button>
                </div>

            </div>

        </div>
    `;

    let quantity = 1;

    $("#detailMinus").addEventListener("click", () => {
        quantity = Math.max(1, quantity - 1);
        $("#detailQuantity").textContent = quantity;
    });

    $("#detailPlus").addEventListener("click", () => {
        quantity = Math.min(product.stock, quantity + 1);
        $("#detailQuantity").textContent = quantity;
    });

    $("#detailAdd").addEventListener("click", () => {
        addToCart(product.id, quantity);
    });

    $("#detailWishlist").addEventListener("click", () => {
        toggleWishlist(product.id);
    });

    showPage("product");

}


/* 13. GLOBAL PRODUCT ACTIONS */

document.addEventListener("click", event => {

    const actionButton = event.target.closest("[data-action]");

    if (!actionButton) return;

    const id = Number(actionButton.dataset.id);
    const action = actionButton.dataset.action;

    if (action === "add") addToCart(id);
    if (action === "wishlist") toggleWishlist(id);
    if (action === "details") showProductDetails(id);
    if (action === "increase") changeQuantity(id, 1);
    if (action === "decrease") changeQuantity(id, -1);
    if (action === "remove") removeFromCart(id);

});


/* 14. CHECKOUT */

function renderCheckoutSummary() {

    const subtotal = cartTotal();
    const delivery = subtotal >= 2000 ? 0 : 100;

    $("#checkoutSummary").innerHTML = `
        <h2>Your Order</h2>

        ${cart.map(item => {

            const product = getProduct(item.id);
            if (!product) return "";

            return `
                <div class="summary-row">
                    <span>${escapeHTML(product.name)} × ${item.quantity}</span>
                    <strong>${money(product.price * item.quantity)}</strong>
                </div>
            `;

        }).join("")}

        <div class="summary-row">
            <span>Subtotal</span><strong>${money(subtotal)}</strong>
        </div>

        <div class="summary-row">
            <span>Delivery</span><strong>${delivery === 0 ? "Free" : money(delivery)}</strong>
        </div>

        <div class="summary-row total">
            <span>Total</span><strong>${money(subtotal + delivery)}</strong>
        </div>
    `;

}

$("#checkoutForm").addEventListener("submit", event => {

    event.preventDefault();

    if (cart.length === 0) {
        showToast("Your cart is empty.");
        showPage("shop");
        return;
    }

    const formData = new FormData(event.target);

    const order = {
        id: "MS-" + Date.now(),
        customer: {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            address: formData.get("address"),
            city: formData.get("city"),
            postal: formData.get("postal")
        },
        payment: formData.get("payment"),
        items: [...cart],
        total: cartTotal() + (cartTotal() >= 2000 ? 0 : 100),
        date: new Date().toLocaleString()
    };

    orders.push(order);

    $("#successMessage").textContent =
        `Your demo order ${order.id} has been placed.`;

    cart = [];

    saveData();
    updateCounts();

    event.target.reset();

    showPage("success");

});


/* 15. LOGIN AND REGISTER - DEMO */

$("#registerForm").addEventListener("submit", event => {

    event.preventDefault();

    const formData = new FormData(event.target);

    const user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
    };

    if (getStorage("mehedi_demo_accounts", []).some(
        account => account.email === user.email
    )) {
        showToast("This email is already registered.");
        return;
    }

    const accounts = getStorage("mehedi_demo_accounts");
    accounts.push(user);

    localStorage.setItem("mehedi_demo_accounts", JSON.stringify(accounts));

    showToast("Account created. Please sign in.");

    event.target.reset();
    showPage("login");

});

$("#loginForm").addEventListener("submit", event => {

    event.preventDefault();

    const formData = new FormData(event.target);

    const accounts = getStorage("mehedi_demo_accounts");

    const user = accounts.find(account =>
        account.email === formData.get("email") &&
        account.password === formData.get("password")
    );

    if (!user) {
        showToast("Invalid email or password.");
        return;
    }

    currentUser = {
        name: user.name,
        email: user.email
    };

    saveData();

    showToast("Welcome back, " + user.name + "!");

    event.target.reset();
    showPage("account");

});

function renderAccount() {

    if (!currentUser) {

        $("#accountContent").innerHTML = `
            <div class="account-card">
                <h2>Welcome to MEHEDI STORE</h2>
                <p>Sign in to view your account.</p>
                <button class="btn btn-dark" data-page="login">Sign In</button>
                <button class="btn btn-light" data-page="register">Register</button>
            </div>
        `;

        return;
    }

    $("#accountContent").innerHTML = `
        <div class="account-card">
            <h2>Hello, ${escapeHTML(currentUser.name)}</h2>
            <p>Email: ${escapeHTML(currentUser.email)}</p>
            <p>Demo Orders: ${orders.length}</p>
            <button class="btn btn-dark" data-page="shop">Continue Shopping</button>
            <button class="btn btn-light" id="logoutBtn">Log Out</button>
        </div>
    `;

    $("#logoutBtn").addEventListener("click", () => {

        currentUser = null;
        saveData();

        showToast("You have logged out.");
        renderAccount();

    });

}


/* 16. NEWSLETTER AND CONTACT */

$("#newsletterForm").addEventListener("submit", event => {

    event.preventDefault();

    showToast("Thank you for subscribing!");
    event.target.reset();

});

$("#contactForm").addEventListener("submit", event => {

    event.preventDefault();

    showToast("Your demo message has been submitted.");
    event.target.reset();

});


/* 17. MOBILE MENU */

$("#mobileMenuBtn").addEventListener("click", () => {

    $("#navigation").classList.toggle("open");

});


/* 18. INITIALIZE WEBSITE */

function initializeStore() {

    updateCounts();
    renderHome();

    const startingPage = location.hash.replace("#", "");

    const validPages = [
        "home", "shop", "product", "cart", "wishlist",
        "checkout", "login", "register", "account",
        "about", "contact", "success"
        const validPages = [
    "home", "shop", "product", "cart", "wishlist",
    "checkout", "login", "register", "account",
    "about", "contact", "success", "admin"
];
    ];

    showPage(validPages.includes(startingPage) ? startingPage : "home");

}

initializeStore();

/* ======================================
   MEHEDI STORE - ADMIN API INTEGRATION
====================================== */

// Backend API address
const API_BASE = "http://localhost:5000/api";

let adminToken = localStorage.getItem("mehedi_admin_token") || "";
let adminProducts = [];
let adminOrders = [];


async function adminAPI(endpoint, options = {}) {

    const response = await fetch(API_BASE + endpoint, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(adminToken
                ? { Authorization: "Bearer " + adminToken }
                : {}),
            ...(options.headers || {})
        }
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        if (response.status === 401) {
            adminLogout();
        }

        throw new Error(data.message || "API request failed.");
    }

    return data;
}


/* ADMIN LOGIN */

$("#adminLoginForm").addEventListener("submit", async event => {

    event.preventDefault();

    const formData = new FormData(event.target);

    const errorBox = $("#adminLoginError");
    errorBox.textContent = "Signing in...";

    try {

        const result = await adminAPI("/auth/login", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password")
            })
        });

        if (result.user.role !== "admin") {
            throw new Error("This account does not have admin permission.");
        }

        adminToken = result.token;

        localStorage.setItem("mehedi_admin_token", adminToken);
        localStorage.setItem("mehedi_admin_name", result.user.name);

        $("#adminName").textContent = result.user.name;

        $("#adminLoginSection").classList.add("hidden");
        $("#adminDashboard").classList.remove("hidden");

        errorBox.textContent = "";

        event.target.reset();

        await loadAdminDashboard();

        showToast("Admin login successful.");

    } catch (error) {

        errorBox.textContent = error.message;

    }

});


/* LOAD ADMIN DASHBOARD */

async function loadAdminDashboard() {

    try {

        const stats = await adminAPI("/admin/stats");

        $("#statProducts").textContent = stats.totalProducts;
        $("#statOrders").textContent = stats.totalOrders;
        $("#statCustomers").textContent = stats.totalCustomers;
        $("#statRevenue").textContent = money(stats.revenue);

        await Promise.all([
            loadAdminProducts(),
            loadAdminOrders(),
            loadAdminCustomers()
        ]);

    } catch (error) {

        showToast(error.message);

    }

}


/* ADMIN TABS */

document.querySelectorAll("[data-admin-tab]").forEach(button => {

    button.addEventListener("click", () => {

        const tab = button.dataset.adminTab;

        document.querySelectorAll(".admin-menu").forEach(menu => {
            menu.classList.remove("active");
        });

        button.classList.add("active");

        document.querySelectorAll(".admin-tab").forEach(section => {
            section.classList.remove("active");
        });

        $("#admin-" + tab).classList.add("active");

    });

});


/* LOAD PRODUCTS */

async function loadAdminProducts() {

    adminProducts = await adminAPI("/admin/products");

    $("#adminProductsTable").innerHTML = adminProducts.map(product => `

        <tr>

            <td>${escapeHTML(product.name)}</td>

            <td>${escapeHTML(product.category)}</td>

            <td>${money(product.price)}</td>

            <td>${product.stock}</td>

            <td>
                <button class="admin-edit"
                    data-admin-action="edit-product"
                    data-id="${product._id}">
                    Edit
                </button>

                <button class="admin-delete"
                    data-admin-action="delete-product"
                    data-id="${product._id}">
                    Delete
                </button>
            </td>

        </tr>

    `).join("");

}


/* SHOW PRODUCT FORM */

$("#showProductForm").addEventListener("click", () => {

    $("#adminProductForm").classList.remove("hidden");

    $("#adminProductForm").reset();

    $("#adminProductForm").elements.productId.value = "";

    $("#productFormTitle").textContent = "Add New Product";

});


$("#cancelProductForm").addEventListener("click", () => {

    $("#adminProductForm").classList.add("hidden");
    $("#adminProductForm").reset();

});


/* ADD OR EDIT PRODUCT */

$("#adminProductForm").addEventListener("submit", async event => {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const productId = formData.get("productId");

    const product = {

        name: formData.get("name").trim(),
        category: formData.get("category"),
        price: Number(formData.get("price")),
        oldPrice: Number(formData.get("oldPrice")) || 0,
        stock: Number(formData.get("stock")),
        image: formData.get("image").trim(),
        description: formData.get("description").trim()

    };

    try {

        if (productId) {

            await adminAPI("/admin/products/" + productId, {
                method: "PUT",
                body: JSON.stringify(product)
            });

            showToast("Product updated successfully.");

        } else {

            await adminAPI("/admin/products", {
                method: "POST",
                body: JSON.stringify(product)
            });

            showToast("New product added successfully.");

        }

        form.reset();

        form.classList.add("hidden");

        await loadAdminProducts();
        await refreshAdminStats();

    } catch (error) {

        showToast(error.message);

    }

});


/* EDIT AND DELETE PRODUCT */

document.addEventListener("click", async event => {

    const button = event.target.closest("[data-admin-action]");

    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.adminAction;

    if (action === "edit-product") {

        const product = adminProducts.find(item => item._id === id);

        if (!product) return;

        const form = $("#adminProductForm");

        form.classList.remove("hidden");

        form.elements.productId.value = product._id;
        form.elements.name.value = product.name;
        form.elements.category.value = product.category;
        form.elements.price.value = product.price;
        form.elements.oldPrice.value = product.oldPrice || 0;
        form.elements.stock.value = product.stock;
        form.elements.image.value = product.image;
        form.elements.description.value = product.description || "";

        $("#productFormTitle").textContent = "Edit Product";

        form.scrollIntoView({ behavior: "smooth" });

    }

    if (action === "delete-product") {

        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {

            await adminAPI("/admin/products/" + id, {
                method: "DELETE"
            });

            showToast("Product deleted.");

            await loadAdminProducts();
            await refreshAdminStats();

        } catch (error) {

            showToast(error.message);

        }

    }

});


/* LOAD ORDERS */

async function loadAdminOrders() {

    adminOrders = await adminAPI("/admin/orders");

    const rows = adminOrders.map(order => `

        <tr>

            <td>${escapeHTML(order._id.slice(-8).toUpperCase())}</td>

            <td>${escapeHTML(order.customer?.name || "Customer")}</td>

            <td>${escapeHTML(order.customer?.phone || "")}</td>

            <td>${money(order.total)}</td>

            <td>
                <select class="admin-status"
                        data-order-status="${order._id}">

                    ${["Pending", "Processing", "Shipped", "Delivered", "Cancelled"]
                        .map(status => `
                            <option value="${status}"
                                ${order.status === status ? "selected" : ""}>
                                ${status}
                            </option>
                        `).join("")}

                </select>
            </td>

            <td>
                <button class="admin-edit"
                    data-admin-action="update-order"
                    data-id="${order._id}">
                    Update
                </button>
            </td>

        </tr>

    `).join("");

    $("#adminOrdersTable").innerHTML = rows;

    $("#recentOrdersTable").innerHTML = adminOrders.slice(0, 5).map(order => `

        <tr>
            <td>${escapeHTML(order._id.slice(-8).toUpperCase())}</td>
            <td>${escapeHTML(order.customer?.name || "Customer")}</td>
            <td>${money(order.total)}</td>
            <td>${escapeHTML(order.status)}</td>
        </tr>

    `).join("");

}


/* UPDATE ORDER STATUS */

document.addEventListener("click", async event => {

    const button = event.target.closest(
        '[data-admin-action="update-order"]'
    );

    if (!button) return;

    const id = button.dataset.id;

    const select = document.querySelector(
        `[data-order-status="${id}"]`
    );

    try {

        await adminAPI("/admin/orders/" + id, {
            method: "PATCH",
            body: JSON.stringify({
                status: select.value
            })
        });

        showToast("Order status updated.");

        await loadAdminOrders();

    } catch (error) {

        showToast(error.message);

    }

});


/* LOAD CUSTOMERS */

async function loadAdminCustomers() {

    const customers = await adminAPI("/admin/customers");

    $("#adminCustomersTable").innerHTML = customers.map(customer => `

        <tr>
            <td>${escapeHTML(customer.name)}</td>
            <td>${escapeHTML(customer.email)}</td>
            <td>${new Date(customer.createdAt).toLocaleDateString()}</td>
        </tr>

    `).join("");

}


/* REFRESH STATS */

async function refreshAdminStats() {

    const stats = await adminAPI("/admin/stats");

    $("#statProducts").textContent = stats.totalProducts;
    $("#statOrders").textContent = stats.totalOrders;
    $("#statCustomers").textContent = stats.totalCustomers;
    $("#statRevenue").textContent = money(stats.revenue);

}


/* ADMIN LOGOUT */

function adminLogout() {

    adminToken = "";

    localStorage.removeItem("mehedi_admin_token");
    localStorage.removeItem("mehedi_admin_name");

    $("#adminDashboard").classList.add("hidden");
    $("#adminLoginSection").classList.remove("hidden");

    $("#adminLoginError").textContent = "";

    showToast("Admin logged out.");

}

$("#adminLogout").addEventListener("click", adminLogout);


/* RESTORE ADMIN SESSION */

async function restoreAdminSession() {

    if (!adminToken) return;

    try {

        await adminAPI("/admin/stats");

        $("#adminLoginSection").classList.add("hidden");
        $("#adminDashboard").classList.remove("hidden");

        $("#adminName").textContent =
            localStorage.getItem("mehedi_admin_name") || "Administrator";

        await loadAdminDashboard();

    } catch (error) {

        adminLogout();

    }

}

restoreAdminSession();
