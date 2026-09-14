/**
 * CHEEZOLOGY CAFE - Official Complete Application Logic & WhatsApp Order System
 */

const OWNER_WHATSAPP = "923315915983";

document.addEventListener("DOMContentLoaded", () => {

  // ==========================================
  // 2. Navigation & Mobile Drawer Setup
  // ==========================================
  const navbar = document.getElementById("navbar");
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky Navbar Toggle
  window.addEventListener("scroll", () => {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }
  });

  // Mobile Menu Drawer
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Active Section Scroll Highlight
  const sections = document.querySelectorAll("main section[id]");
  if (sections.length > 0) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${sectionId}`,
            );
          });
        }
      });
    });
  }

  // Category Quick-Triggers
  const categoryCards = document.querySelectorAll("[data-cat-trigger]");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cat = card.getAttribute("data-cat-trigger");
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth" });
      }
      const targetTab = document.querySelector(
        `.tab-btn[data-category="${cat}"]`,
      );
      if (targetTab) {
        targetTab.click();
      }
    });
  });

  // ==========================================
  // 3. Official Cheezology Menu Dataset
  // ==========================================
  const officialMenu = [
    // STARTER
    {
      name: "1 Leg piece",
      category: "starter",
      price: "Rs. 200",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "1 Chest piece",
      category: "starter",
      price: "Rs. 250",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hot Shots (6 pc)",
      category: "starter",
      price: "Rs. 280",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hot Wings (6 pc)",
      category: "starter",
      price: "Rs. 280",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Honey Wings (6 pc)",
      category: "starter",
      price: "Rs. 380",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Nuggets (6 pc)",
      category: "starter",
      price: "Rs. 280",
      image:
        "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Oven Bake Wings (10pcs)",
      category: "starter",
      price: "Rs. 500",
      image:
        "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
    },

    // SHAWARMA
    {
      name: "Shawarma",
      category: "shawarma",
      price: "Rs. 180",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cheese Shawarma",
      category: "shawarma",
      price: "Rs. 230",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Shawarma",
      category: "shawarma",
      price: "Rs. 300",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Cheese Shawarma",
      category: "shawarma",
      price: "Rs. 360",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Afghani Shawarma",
      category: "shawarma",
      price: "Rs. 170",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Afghani Cheese Shawarma",
      category: "shawarma",
      price: "Rs. 220",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cheezology Special Shawarma",
      category: "shawarma",
      price: "Rs. 350",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },

    // BURGER
    {
      name: "Cheezology Special Burger",
      category: "burgers",
      price: "Rs. 500",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Burger",
      category: "burgers",
      price: "Rs. 280",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Cheese Burger",
      category: "burgers",
      price: "Rs. 330",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Burger",
      category: "burgers",
      price: "Rs. 380",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Cheese Burger",
      category: "burgers",
      price: "Rs. 430",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Double Decker Burger",
      category: "burgers",
      price: "Rs. 550",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Supreme Burger",
      category: "burgers",
      price: "Rs. 650",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Jalapeno Burger",
      category: "burgers",
      price: "Rs. 500",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    },

    // ROLLS
    {
      name: "Cheezology Signature Roll",
      category: "rolls",
      price: "Rs. 350",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Paratha Roll",
      category: "rolls",
      price: "Rs. 210",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Cheese Roll",
      category: "rolls",
      price: "Rs. 260",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Roll",
      category: "rolls",
      price: "Rs. 350",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Cheese Roll",
      category: "rolls",
      price: "Rs. 400",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pizza Paratha Roll",
      category: "rolls",
      price: "Rs. 450",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Behari Roll",
      category: "rolls",
      price: "Rs. 700",
      image:
        "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    },

    // FRIES
    {
      name: "Fries",
      category: "fries",
      friesPrices: { Regular: "Rs. 150", Family: "Rs. 270" },
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mayo Garlic Fries",
      category: "fries",
      friesPrices: { Regular: "Rs. 250", Family: "Rs. 320" },
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cheese Fries",
      category: "fries",
      friesPrices: { Regular: "Rs. 250", Family: "Rs. 380" },
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Loaded Fries",
      category: "fries",
      price: "Rs. 600",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Extra Dip",
      category: "fries",
      price: "Rs. 100",
      image:
        "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    },

    // CHINESE AND ITALIAN
    {
      name: "Chinese Fried Rice",
      category: "chinese_italian",
      price: "Rs. 650",
      image:
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mac and Cheese Pasta",
      category: "chinese_italian",
      price: "Rs. 750",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Alfredo Pasta",
      category: "chinese_italian",
      price: "Rs. 900",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chowmein",
      category: "chinese_italian",
      price: "Rs. 750",
      image:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hot and Sour Soup",
      category: "chinese_italian",
      price: "Rs. 700",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Corn Soup",
      category: "chinese_italian",
      price: "Rs. 700",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Vegetable Soup",
      category: "chinese_italian",
      price: "Rs. 600",
      image:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
    },

    // PIZZA
    {
      name: "Cheezology Special Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 700",
        M: "Rs. 1200",
        L: "Rs. 1750",
        XL: "Rs. 2300",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chef Special Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 700",
        M: "Rs. 1200",
        L: "Rs. 1750",
        XL: "Rs. 2300",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Mozzarella Magic Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 750",
        M: "Rs. 1300",
        L: "Rs. 1800",
        XL: "Rs. 2400",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pepperoni Pizza",
      category: "pizza",
      pizzaPrices: { M: "Rs. 1200", L: "Rs. 1650", XL: "Rs. 2300" },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Supreme Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 700",
        M: "Rs. 1150",
        L: "Rs. 1650",
        XL: "Rs. 2250",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Zinger Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 700",
        M: "Rs. 1150",
        L: "Rs. 1650",
        XL: "Rs. 2250",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Crown Crust Pizza",
      category: "pizza",
      pizzaPrices: { M: "Rs. 1300", L: "Rs. 1800", XL: "Rs. 2450" },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hot & Spicy Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 600",
        M: "Rs. 1050",
        L: "Rs. 1550",
        XL: "Rs. 2150",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Fajita Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 600",
        M: "Rs. 1050",
        L: "Rs. 1550",
        XL: "Rs. 2150",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Chicken Tikka Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 600",
        M: "Rs. 1050",
        L: "Rs. 1550",
        XL: "Rs. 2150",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Calzone Pizza",
      category: "pizza",
      pizzaPrices: { M: "Rs. 1100", L: "Rs. 1550", XL: "Rs. 2150" },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Beef Pizza",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 850",
        M: "Rs. 1700",
        L: "Rs. 3000",
        XL: "Rs. 4000",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Extra Topping",
      category: "pizza",
      pizzaPrices: {
        Small: "Rs. 150",
        M: "Rs. 300",
        L: "Rs. 400",
        XL: "Rs. 600",
      },
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // ==========================================
  // 4. Official Deals Dataset
  // ==========================================
  const officialDeals = {
    single: [
      {
        title: "Single Deal 1",
        price: "Rs. 370",
        items: "1 Chicken Paratha + 1 Regular Drink + Plain Fries",
      },
      {
        title: "Single Deal 2",
        price: "Rs. 750",
        items: "Hot & Spicy Pizza + 1 Regular Drink + Fries",
      },
      {
        title: "Single Deal 3",
        price: "Rs. 350",
        items: "Chicken Shawarma + 1 Regular Drink + Fries",
      },
      {
        title: "Single Deal 4",
        price: "Rs. 500",
        items: "Zinger Burger + 1 Regular Drink + Plain Fries",
      },
      {
        title: "Single Deal 5",
        price: "Rs. 550",
        items: "10 Hotshots + 1 Regular Drink + Plain Fries",
      },
      {
        title: "Single Deal 6",
        price: "Rs. 600",
        items: "10 Hot Wings + 1 Regular Drink + Plain Fries",
      },
    ],
    buddies: [
      {
        title: "Buddies Deal 1",
        price: "Rs. 1000",
        items: "4 Chicken Shawarma + 1.5 Ltr Drink + Plain Fries",
      },
      {
        title: "Buddies Deal 2",
        price: "Rs. 1100",
        items: "4 Paratha Roll + 1.5 Ltr Drink + Plain Fries",
      },
      {
        title: "Buddies Deal 3",
        price: "Rs. 1200",
        items: "Medium Pizza + 1.5 Ltr Drink + Plain Fries",
      },
      {
        title: "Buddies Deal 4",
        price: "Rs. 1000",
        items: "2 Zinger Burgers + 2 Regular Drinks + Plain Fries",
      },
      {
        title: "Buddies Deal 5",
        price: "Rs. 700",
        items: "6 Hotshots + 6 Hotwings + Regular Drink + Plain Fries",
      },
      {
        title: "Buddies Deal 6",
        price: "Rs. 1200",
        items: "2 Cheezology Burgers + 2 Regular Drinks + Plain Fries",
      },
    ],
    family: [
      {
        title: "Family Deal 1",
        price: "Rs. 1700",
        items: "Hot & Spicy Pizza + 1.5 Ltr Drink",
      },
      {
        title: "Family Deal 2",
        price: "Rs. 2050",
        items: "2 Zinger Burgers + 1.5 Ltr Drink",
      },
      {
        title: "Family Deal 3",
        price: "Rs. 1700",
        items: "10 Hotshots + 1 Medium Pizza + 1.5 Ltr Drink",
      },
      {
        title: "Family Deal 4",
        price: "Rs. 1700",
        items: "10 Hotwings + 1 Medium Pizza + 1.5 Ltr Drink",
      },
      {
        title: "Family Deal 5",
        price: "Rs. 3650",
        items: "2 Cheezology Special Pizza Large + 1.5 Ltr Drink",
      },
      {
        title: "Family Deal 6",
        price: "Rs. 1800",
        items:
          "3 Chicken Shawarma + 3 Chicken Paratha Roll + Hotwings (10pcs) + Drinks 1.5 Ltr",
      },
      {
        title: "Family Deal 7",
        price: "Rs. 2250",
        items: "3 Small Pizza + Hotshots (6pcs) + 1.5 Ltr Drink",
      },
      {
        title: "Family Deal 8",
        price: "Rs. 4250",
        items:
          "4 Medium Pizza + 4 Zinger Burger + Drinks 1.5 Ltr + Hotwings (10pcs)",
      },
    ],
  };

  // ==========================================
  // 5. Cart State & Helper Injection
  // ==========================================
  let cart = [];
  let currentModalItem = null;
  let modalQty = 1;
  let selectedVariant = null;

  // Parse price string to integer (e.g., "Rs. 1,200" -> 1200)
  function parsePriceNum(priceStr) {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10) || 0;
  }

  // Inject UI Modals & Cart UI without affecting existing layouts
  function injectOrderUI() {
    // 1. Floating Cart Trigger Button
    if (!document.getElementById("cz-cart-btn")) {
      const cartBtn = document.createElement("button");
      cartBtn.id = "cz-cart-btn";
      cartBtn.setAttribute("aria-label", "View Cart");
      cartBtn.innerHTML = `🛒 <span id="cz-cart-count">0</span>`;
      document.body.appendChild(cartBtn);
      cartBtn.addEventListener("click", openCartDrawer);
    }

    // 2. Add-to-Cart Item Selection Modal
    if (!document.getElementById("cz-item-modal")) {
      const itemModal = document.createElement("div");
      itemModal.id = "cz-item-modal";
      itemModal.className = "cz-modal-overlay";
      itemModal.innerHTML = `
        <div class="cz-modal-card">
          <button class="cz-modal-close" id="cz-item-modal-close">&times;</button>
          <div class="cz-modal-body">
            <img id="cz-modal-img" src="" alt="Food Item" />
            <h3 id="cz-modal-title">Item Title</h3>
            <p id="cz-modal-desc" class="cz-modal-desc"></p>
            <div id="cz-modal-variants" class="cz-variants-container"></div>
            <div class="cz-qty-wrapper">
              <span class="cz-label">Quantity:</span>
              <div class="cz-qty-controls">
                <button type="button" id="cz-qty-minus">-</button>
                <span id="cz-qty-val">1</span>
                <button type="button" id="cz-qty-plus">+</button>
              </div>
            </div>
            <div class="cz-modal-price-line">
              Total: <span id="cz-modal-total-price">Rs. 0</span>
            </div>
            <button type="button" class="btn btn-primary full-width" id="cz-modal-add-btn">Add to Cart</button>
            <div id="cz-modal-toast" class="cz-toast">✓ Item added to cart</div>
          </div>
        </div>
      `;
      document.body.appendChild(itemModal);

      document.getElementById("cz-item-modal-close").onclick = closeItemModal;
      document.getElementById("cz-qty-minus").onclick = () => {
        if (modalQty > 1) {
          modalQty--;
          updateModalPriceDisplay();
        }
      };
      document.getElementById("cz-qty-plus").onclick = () => {
        modalQty++;
        updateModalPriceDisplay();
      };
      document.getElementById("cz-modal-add-btn").onclick = confirmAddToCart;
    }

    // 3. Cart Slide-out Drawer
    if (!document.getElementById("cz-cart-drawer")) {
      const drawer = document.createElement("div");
      drawer.id = "cz-cart-drawer";
      drawer.className = "cz-drawer-overlay";
      drawer.innerHTML = `
        <div class="cz-drawer-content">
          <div class="cz-drawer-header">
            <h3>Your Order Cart</h3>
            <button class="cz-modal-close" id="cz-cart-close">&times;</button>
          </div>
          <div class="cz-drawer-body" id="cz-cart-items-container">
            <p class="cz-empty-msg">Your cart is currently empty.</p>
          </div>
          <div class="cz-drawer-footer">
            <div class="cz-cart-total-row">
              <span>TOTAL BILL:</span>
              <strong id="cz-cart-total-bill">Rs. 0</strong>
            </div>
            <div class="cz-drawer-actions">
              <button class="btn btn-secondary" id="cz-continue-shopping">Continue Shopping</button>
              <button class="btn btn-primary" id="cz-proceed-checkout">Checkout</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);

      document.getElementById("cz-cart-close").onclick = closeCartDrawer;
      document.getElementById("cz-continue-shopping").onclick = closeCartDrawer;
      document.getElementById("cz-proceed-checkout").onclick =
        startCheckoutFlow;
    }

    // 4. Checkout & Order Summary Modal
    if (!document.getElementById("cz-checkout-modal")) {
      const checkoutModal = document.createElement("div");
      checkoutModal.id = "cz-checkout-modal";
      checkoutModal.className = "cz-modal-overlay";
      checkoutModal.innerHTML = `
        <div class="cz-modal-card cz-checkout-card">
          <button class="cz-modal-close" id="cz-checkout-close">&times;</button>
          
          <!-- Step 1: Customer Form -->
          <div id="cz-checkout-step-1">
            <h3>Delivery Information</h3>
            <form id="cz-checkout-form" onsubmit="return false;">
              <div class="cz-form-group">
                <label for="cz-cust-name">Full Name *</label>
                <input type="text" id="cz-cust-name" placeholder="e.g. Fahad" required />
              </div>
              <div class="cz-form-group">
                <label for="cz-cust-phone">WhatsApp Number *</label>
                <input type="tel" id="cz-cust-phone" placeholder="e.g. 03365119446" required />
              </div>
              <div class="cz-form-group">
                <label for="cz-cust-address">Delivery Address *</label>
                <textarea id="cz-cust-address" rows="3" placeholder="e.g. House #12, Street 4, KDA Sector 9, Kohat" required></textarea>
              </div>
              <div class="cz-form-group">
                <label for="cz-cust-note">Order Note (Optional)</label>
                <input type="text" id="cz-cust-note" placeholder="Extra spicy, no mayo, etc." />
              </div>
              <button type="submit" class="btn btn-primary full-width mt-2" id="cz-btn-to-summary">Review Order Summary</button>
            </form>
          </div>

          <!-- Step 2: Order Summary -->
          <div id="cz-checkout-step-2" style="display:none;">
            <h3>ORDER SUMMARY</h3>
            <div class="cz-summary-box">
              <p><strong>Customer Name:</strong> <span id="sum-name"></span></p>
              <p><strong>WhatsApp Number:</strong> <span id="sum-phone"></span></p>
              <p><strong>Delivery Address:</strong> <span id="sum-address"></span></p>
              <p id="sum-note-row" style="display:none;"><strong>Order Note:</strong> <span id="sum-note"></span></p>
            </div>
            <hr class="cz-divider" />
            <div id="cz-summary-items-list" class="cz-summary-items"></div>
            <hr class="cz-divider" />
            <div class="cz-cart-total-row">
              <span>TOTAL BILL:</span>
              <strong id="cz-summary-total">Rs. 0</strong>
            </div>
            <div class="cz-summary-actions mt-3">
              <button type="button" class="btn btn-secondary" id="cz-btn-edit-order">EDIT ORDER</button>
              <button type="button" class="btn btn-primary" id="cz-btn-confirm-order">CONFIRM ORDER</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(checkoutModal);

      document.getElementById("cz-checkout-close").onclick = closeCheckoutModal;
      document.getElementById("cz-btn-to-summary").onclick =
        proceedToSummaryStep;
      document.getElementById("cz-btn-edit-order").onclick = () => {
        document.getElementById("cz-checkout-step-2").style.display = "none";
        document.getElementById("cz-checkout-step-1").style.display = "block";
      };
      document.getElementById("cz-btn-confirm-order").onclick =
        sendWhatsAppOrder;
    }

    injectStylesIfNeeded();
  }

  // Inject matching styles into document head
  function injectStylesIfNeeded() {
    if (document.getElementById("cz-order-styles")) return;
    const styleTag = document.createElement("style");
    styleTag.id = "cz-order-styles";
    styleTag.textContent = `
      /* Floating Cart Button */
      #cz-cart-btn {
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 9999;
        background: #ff9f0d;
        color: #0d0d0d;
        border: none;
        border-radius: 50px;
        padding: 12px 20px;
        font-size: 1.2rem;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 8px;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      #cz-cart-btn:hover { transform: scale(1.05); background: #e08b00; }
      #cz-cart-count {
        background: #0d0d0d;
        color: #fff;
        border-radius: 50%;
        padding: 2px 8px;
        font-size: 0.9rem;
      }

      /* Modals Overlay */
      .cz-modal-overlay, .cz-drawer-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 10000;
        display: none;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(3px);
      }

      .cz-modal-card {
        background: #1a1a1a;
        color: #ffffff;
        border: 1px solid #333;
        border-radius: 12px;
        width: 90%;
        max-width: 450px;
        padding: 24px;
        position: relative;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        max-height: 90vh;
        overflow-y: auto;
      }

      .cz-modal-close {
        position: absolute;
        top: 12px;
        right: 16px;
        background: transparent;
        border: none;
        color: #aaa;
        font-size: 1.8rem;
        cursor: pointer;
      }
      .cz-modal-close:hover { color: #ff9f0d; }

      .cz-modal-body { text-align: center; }
      .cz-modal-body img { width: 100%; max-height: 180px; object-fit: cover; border-radius: 8px; margin-bottom: 15px; }
      .cz-modal-body h3 { font-size: 1.4rem; margin-bottom: 5px; color: #ff9f0d; }
      .cz-modal-desc { color: #bbb; font-size: 0.9rem; margin-bottom: 15px; }

      /* Variants selection */
      .cz-variants-container { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-bottom: 15px; }
      .cz-variant-btn {
        background: #2a2a2a;
        border: 1px solid #444;
        color: #fff;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.85rem;
      }
      .cz-variant-btn.active { background: #ff9f0d; color: #000; font-weight: bold; border-color: #ff9f0d; }

      /* Quantity Controls */
      .cz-qty-wrapper { display: flex; align-items: center; justify-content: center; gap: 15px; margin: 15px 0; }
      .cz-qty-controls { display: flex; align-items: center; background: #2a2a2a; border-radius: 6px; overflow: hidden; }
      .cz-qty-controls button {
        background: #333; color: #fff; border: none; width: 36px; height: 36px;
        font-size: 1.2rem; cursor: pointer; transition: background 0.2s;
      }
      .cz-qty-controls button:hover { background: #ff9f0d; color: #000; }
      .cz-qty-controls span { width: 40px; text-align: center; font-weight: bold; }

      .cz-modal-price-line { font-size: 1.1rem; font-weight: bold; margin-bottom: 15px; color: #fff; }

      /* Toast Notification */
      .cz-toast {
        display: none; background: #2e7d32; color: #fff; padding: 8px; border-radius: 4px;
        margin-top: 10px; font-size: 0.9rem;
      }

      /* Slide-out Drawer */
      .cz-drawer-overlay { justify-content: flex-end; }
      .cz-drawer-content {
        background: #181818; color: #fff; width: 100%; max-width: 420px; height: 100%;
        display: flex; flex-direction: column; padding: 20px; box-shadow: -5px 0 25px rgba(0,0,0,0.5);
      }
      .cz-drawer-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #333; padding-bottom: 15px; }
      .cz-drawer-header h3 { color: #ff9f0d; margin: 0; }
      .cz-drawer-body { flex: 1; overflow-y: auto; padding: 15px 0; }
      .cz-drawer-footer { border-top: 1px solid #333; padding-top: 15px; }
      .cz-cart-total-row { display: flex; justify-content: space-between; font-size: 1.2rem; margin-bottom: 15px; }
      .cz-cart-total-row strong { color: #ff9f0d; }
      .cz-drawer-actions { display: flex; gap: 10px; }
      .cz-drawer-actions button { flex: 1; }

      /* Cart Item Card */
      .cz-cart-item {
        display: flex; justify-content: space-between; align-items: center;
        background: #222; border-radius: 8px; padding: 10px; margin-bottom: 10px; border: 1px solid #333;
      }
      .cz-cart-item-info h4 { margin: 0 0 4px 0; font-size: 0.95rem; }
      .cz-cart-item-info p { margin: 0; color: #ff9f0d; font-size: 0.85rem; }
      .cz-cart-item-ctrls { display: flex; align-items: center; gap: 8px; }
      .cz-remove-btn { background: transparent; border: none; color: #ff5252; cursor: pointer; font-size: 1.1rem; margin-left: 5px; }

      /* Checkout Form */
      .cz-form-group { margin-bottom: 12px; text-align: left; }
      .cz-form-group label { display: block; font-size: 0.85rem; color: #ccc; margin-bottom: 4px; }
      .cz-form-group input, .cz-form-group textarea {
        width: 100%; background: #262626; border: 1px solid #444; color: #fff;
        padding: 8px 12px; border-radius: 6px; font-size: 0.9rem; box-sizing: border-box;
      }
      .cz-form-group input:focus, .cz-form-group textarea:focus { border-color: #ff9f0d; outline: none; }
      
      .cz-summary-box { background: #262626; padding: 12px; border-radius: 6px; text-align: left; font-size: 0.9rem; margin-bottom: 10px; }
      .cz-summary-box p { margin: 4px 0; color: #ddd; }
      .cz-divider { border: 0; border-top: 1px solid #333; margin: 12px 0; }
      .cz-summary-items { text-align: left; max-height: 180px; overflow-y: auto; font-size: 0.9rem; }
      .cz-summary-item-row { margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1px dashed #333; }
      .cz-summary-item-title { display: flex; justify-content: space-between; font-weight: bold; }
      .cz-summary-item-sub { color: #aaa; font-size: 0.8rem; margin-top: 2px; }
      .cz-summary-actions { display: flex; gap: 10px; }
      .cz-summary-actions button { flex: 1; }
      .cz-empty-msg { text-align: center; color: #888; margin-top: 40px; }
    `;
    document.head.appendChild(styleTag);
  }

  // ==========================================
  // 6. Item Selection & Quantity Modal Logic
  // ==========================================
  function triggerItemOrdering(item) {
    currentModalItem = item;
    modalQty = 1;

    const modal = document.getElementById("cz-item-modal");
    document.getElementById("cz-modal-img").src =
      item.image ||
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80";
    document.getElementById("cz-modal-title").textContent = item.name;
    document.getElementById("cz-modal-desc").textContent = item.desc || "";

    const variantsContainer = document.getElementById("cz-modal-variants");
    variantsContainer.innerHTML = "";

    if (item.pizzaPrices) {
      const sizes = Object.keys(item.pizzaPrices);
      selectedVariant = { size: sizes[0], price: item.pizzaPrices[sizes[0]] };
      sizes.forEach((size) => {
        const btn = document.createElement("button");
        btn.className = `cz-variant-btn ${size === selectedVariant.size ? "active" : ""}`;
        btn.textContent = `${size} (${item.pizzaPrices[size]})`;
        btn.onclick = () => {
          document
            .querySelectorAll(".cz-variant-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          selectedVariant = { size: size, price: item.pizzaPrices[size] };
          updateModalPriceDisplay();
        };
        variantsContainer.appendChild(btn);
      });
    } else if (item.friesPrices) {
      const sizes = Object.keys(item.friesPrices);
      selectedVariant = { size: sizes[0], price: item.friesPrices[sizes[0]] };
      sizes.forEach((size) => {
        const btn = document.createElement("button");
        btn.className = `cz-variant-btn ${size === selectedVariant.size ? "active" : ""}`;
        btn.textContent = `${size} (${item.friesPrices[size]})`;
        btn.onclick = () => {
          document
            .querySelectorAll(".cz-variant-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          selectedVariant = { size: size, price: item.friesPrices[size] };
          updateModalPriceDisplay();
        };
        variantsContainer.appendChild(btn);
      });
    } else {
      selectedVariant = { size: null, price: item.price };
    }

    updateModalPriceDisplay();
    document.getElementById("cz-modal-toast").style.display = "none";
    modal.style.display = "flex";
  }

  function updateModalPriceDisplay() {
    document.getElementById("cz-qty-val").textContent = modalQty;
    const unitPrice = parsePriceNum(
      selectedVariant ? selectedVariant.price : currentModalItem.price,
    );
    const total = unitPrice * modalQty;
    document.getElementById("cz-modal-total-price").textContent =
      `Rs. ${total}`;
  }

  function closeItemModal() {
    const modal = document.getElementById("cz-item-modal");
    if (modal) modal.style.display = "none";
  }

  function confirmAddToCart() {
    if (!currentModalItem || !selectedVariant) return;

    const unitPriceStr = selectedVariant.price || currentModalItem.price;
    const unitPriceNum = parsePriceNum(unitPriceStr);
    const displayName = selectedVariant.size
      ? `${currentModalItem.name} (${selectedVariant.size})`
      : currentModalItem.name;

    const existingIndex = cart.findIndex((i) => i.name === displayName);
    if (existingIndex > -1) {
      cart[existingIndex].qty += modalQty;
      cart[existingIndex].subtotal = cart[existingIndex].qty * unitPriceNum;
    } else {
      cart.push({
        name: displayName,
        unitPrice: unitPriceNum,
        qty: modalQty,
        subtotal: unitPriceNum * modalQty,
      });
    }

    updateCartBadge();
    renderCartDrawerItems();

    const toast = document.getElementById("cz-modal-toast");
    toast.textContent = `✓ ${displayName} × ${modalQty} added to cart`;
    toast.style.display = "block";

    setTimeout(() => {
      closeItemModal();
    }, 800);
  }

  // ==========================================
  // 7. Cart Drawer & Calculation Logic
  // ==========================================
  function updateCartBadge() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById("cz-cart-count");
    if (countEl) countEl.textContent = totalQty;
  }

  function openCartDrawer() {
    renderCartDrawerItems();
    const drawer = document.getElementById("cz-cart-drawer");
    if (drawer) drawer.style.display = "flex";
  }

  function closeCartDrawer() {
    const drawer = document.getElementById("cz-cart-drawer");
    if (drawer) drawer.style.display = "none";
  }

  function renderCartDrawerItems() {
    const container = document.getElementById("cz-cart-items-container");
    const totalBillEl = document.getElementById("cz-cart-total-bill");

    if (!container) return;
    container.innerHTML = "";

    if (cart.length === 0) {
      container.innerHTML = `<p class="cz-empty-msg">Your cart is currently empty.</p>`;
      if (totalBillEl) totalBillEl.textContent = "Rs. 0";
      return;
    }

    let totalBill = 0;
    cart.forEach((item, index) => {
      totalBill += item.subtotal;

      const itemRow = document.createElement("div");
      itemRow.className = "cz-cart-item";
      itemRow.innerHTML = `
        <div class="cz-cart-item-info">
          <h4>${item.name}</h4>
          <p>Rs. ${item.unitPrice} × ${item.qty} = Rs. ${item.subtotal}</p>
        </div>
        <div class="cz-cart-item-ctrls">
          <div class="cz-qty-controls">
            <button type="button" class="cz-cart-minus" data-index="${index}">-</button>
            <span>${item.qty}</span>
            <button type="button" class="cz-cart-plus" data-index="${index}">+</button>
          </div>
          <button type="button" class="cz-remove-btn" data-index="${index}" title="Remove Item">&times;</button>
        </div>
      `;
      container.appendChild(itemRow);
    });

    if (totalBillEl) totalBillEl.textContent = `Rs. ${totalBill}`;

    // Attach listeners for cart item quantity modifications
    container.querySelectorAll(".cz-cart-minus").forEach((btn) => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute("data-index"), 10);
        if (cart[idx].qty > 1) {
          cart[idx].qty--;
          cart[idx].subtotal = cart[idx].qty * cart[idx].unitPrice;
        } else {
          cart.splice(idx, 1);
        }
        updateCartBadge();
        renderCartDrawerItems();
      };
    });

    container.querySelectorAll(".cz-cart-plus").forEach((btn) => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute("data-index"), 10);
        cart[idx].qty++;
        cart[idx].subtotal = cart[idx].qty * cart[idx].unitPrice;
        updateCartBadge();
        renderCartDrawerItems();
      };
    });

    container.querySelectorAll(".cz-remove-btn").forEach((btn) => {
      btn.onclick = (e) => {
        const idx = parseInt(e.target.getAttribute("data-index"), 10);
        cart.splice(idx, 1);
        updateCartBadge();
        renderCartDrawerItems();
      };
    });
  }

  // ==========================================
  // 8. Checkout & Order Summary Logic
  // ==========================================
  function startCheckoutFlow() {
    if (cart.length === 0) {
      alert("Your cart is empty! Add items before checking out.");
      return;
    }
    closeCartDrawer();
    document.getElementById("cz-checkout-step-1").style.display = "block";
    document.getElementById("cz-checkout-step-2").style.display = "none";
    const checkoutModal = document.getElementById("cz-checkout-modal");
    if (checkoutModal) checkoutModal.style.display = "flex";
  }

  function closeCheckoutModal() {
    const modal = document.getElementById("cz-checkout-modal");
    if (modal) modal.style.display = "none";
  }

  function proceedToSummaryStep() {
    const name = document.getElementById("cz-cust-name").value.trim();
    const phone = document.getElementById("cz-cust-phone").value.trim();
    const address = document.getElementById("cz-cust-address").value.trim();
    const note = document.getElementById("cz-cust-note").value.trim();

    if (!name || !phone || !address) {
      alert(
        "Please fill in all required fields: Name, WhatsApp Number, and Delivery Address.",
      );
      return;
    }

    document.getElementById("sum-name").textContent = name;
    document.getElementById("sum-phone").textContent = phone;
    document.getElementById("sum-address").textContent = address;

    if (note) {
      document.getElementById("sum-note").textContent = note;
      document.getElementById("sum-note-row").style.display = "block";
    } else {
      document.getElementById("sum-note-row").style.display = "none";
    }

    const summaryItemsList = document.getElementById("cz-summary-items-list");
    summaryItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      total += item.subtotal;
      const row = document.createElement("div");
      row.className = "cz-summary-item-row";
      row.innerHTML = `
        <div class="cz-summary-item-title">
          <span>${item.qty} × ${item.name}</span>
          <strong>Rs. ${item.subtotal}</strong>
        </div>
        <div class="cz-summary-item-sub">Unit Price: Rs. ${item.unitPrice}</div>
      `;
      summaryItemsList.appendChild(row);
    });

    document.getElementById("cz-summary-total").textContent = `Rs. ${total}`;

    document.getElementById("cz-checkout-step-1").style.display = "none";
    document.getElementById("cz-checkout-step-2").style.display = "block";
  }

  // Automatic WhatsApp Order Redirect
  function sendWhatsAppOrder() {
    const name = document.getElementById("cz-cust-name").value.trim();
    const phone = document.getElementById("cz-cust-phone").value.trim();
    const address = document.getElementById("cz-cust-address").value.trim();
    const note = document.getElementById("cz-cust-note").value.trim();

    if (!name || !phone || !address) {
      alert("Please fill in all required fields: Name, WhatsApp Number, and Delivery Address.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty! Add items before placing an order.");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      alert("Please enter a valid WhatsApp number.");
      return;
    }

    let totalBill = 0;
    let orderDetails = cart
      .map((item) => {
        totalBill += item.subtotal;
        return `${item.qty} × ${item.name}\nUnit Price: Rs. ${item.unitPrice}\nSubtotal: Rs. ${item.subtotal}`;
      })
      .join("\n\n");

    let message = `CHEEZOLOGY CAFE\nNEW ORDER\n\n`;
    message += `Customer Name:\n${name}\n\n`;
    message += `Customer WhatsApp:\n${phone}\n\n`;
    message += `Delivery Address:\n${address}\n\n`;
    message += `--------------------------------\n\n`;
    message += `ORDER DETAILS\n\n${orderDetails}\n\n`;
    message += `--------------------------------\n\n`;
    message += `TOTAL BILL: Rs. ${totalBill}\n\n`;
    message += `Order Note:\n${note || "No additional notes"}\n\n`;
    message += `--------------------------------\n\n`;
    message += `Order placed through Cheezology website.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    cart = [];
    updateCartBadge();
    closeCheckoutModal();
  }

  // ==========================================
  // 9. Dynamic Renderers & CTA Bindings
  // ==========================================
  const menuGrid = document.getElementById("menu-items-grid");
  const tabBtns = document.querySelectorAll(".menu-tabs .tab-btn");

  function renderMenu(cat = "all") {
    if (!menuGrid) return;
    menuGrid.innerHTML = "";

    let itemsToDisplay = [];
    if (cat === "all") {
      itemsToDisplay = officialMenu;
    } else if (cat === "deals") {
      itemsToDisplay = Object.values(officialDeals)
        .flat()
        .map((d) => ({
          name: d.title,
          category: "deals",
          price: d.price,
          desc: d.items,
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        }));
    } else {
      itemsToDisplay = officialMenu.filter((item) => item.category === cat);
    }

    const fragment = document.createDocumentFragment();

    itemsToDisplay.forEach((item) => {
      const card = document.createElement("div");
      card.className = "food-card";

      let priceHTML = "";
      if (item.pizzaPrices) {
        priceHTML =
          `<div class="pizza-price-grid">` +
          Object.entries(item.pizzaPrices)
            .map(
              ([size, price]) =>
                `<div class="pizza-price-item"><span class="p-size">${size}</span><span class="p-val">${price}</span></div>`,
            )
            .join("") +
          `</div>`;
      } else if (item.friesPrices) {
        priceHTML =
          `<div class="fries-price-grid">` +
          Object.entries(item.friesPrices)
            .map(
              ([size, price]) =>
                `<div class="fries-price-item"><span class="f-size">${size}</span><span class="f-val">${price}</span></div>`,
            )
            .join("") +
          `</div>`;
      } else {
        priceHTML = `<span class="price">${item.price}</span>`;
      }

      card.innerHTML = `
        <div class="food-card-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="food-card-body">
          <h3>${item.name}</h3>
          ${item.desc ? `<p>${item.desc}</p>` : ""}
          ${priceHTML}
          <div class="food-card-footer">
            <button type="button" class="btn btn-primary btn-sm full-width cz-order-btn">Order Now</button>
          </div>
        </div>
      `;

      card.querySelector(".cz-order-btn").addEventListener("click", () => {
        triggerItemOrdering(item);
      });

      fragment.appendChild(card);
    });

    menuGrid.appendChild(fragment);
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const selectedCategory = btn.getAttribute("data-category");
      renderMenu(selectedCategory);
    });
  });

  const dealsGrid = document.getElementById("deals-grid");
  const dealTabBtns = document.querySelectorAll(".deal-tab-btn");

  function renderDeals(dealCat = "single") {
    if (!dealsGrid) return;
    dealsGrid.innerHTML = "";

    const dealList = officialDeals[dealCat] || [];
    const fragment = document.createDocumentFragment();

    dealList.forEach((deal) => {
      const card = document.createElement("div");
      card.className = "deal-card";
      card.innerHTML = `
        <div>
          <span class="deal-tag">${dealCat.toUpperCase()} COMBO</span>
          <div class="deal-header">
            <h3>${deal.title}</h3>
          </div>
          <div class="deal-body">
            <p class="deal-desc">${deal.items}</p>
            <div class="deal-price-wrapper">
              <span class="deal-price">${deal.price}</span>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary full-width mt-3 cz-order-btn">Order Deal</button>
      `;

      card.querySelector(".cz-order-btn").addEventListener("click", () => {
        triggerItemOrdering({
          name: deal.title,
          price: deal.price,
          desc: deal.items,
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        });
      });

      fragment.appendChild(card);
    });

    dealsGrid.appendChild(fragment);
  }

  dealTabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      dealTabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-deal-cat");
      renderDeals(cat);
    });
  });

  // Bind existing static HTML elements (Hero buttons, Popular items, hardcoded CTAs)
  function bindExistingStaticButtons() {
    const allButtons = document.querySelectorAll("a, button");
    allButtons.forEach((element) => {
      const text = element.textContent.trim().toLowerCase();
      const isOrderCTA =
        text.includes("order now") ||
        text === "order" ||
        text.includes("add to cart") ||
        text.includes("order deal");

      if (
        isOrderCTA &&
        !element.classList.contains("cz-order-btn") &&
        !element.closest("#cz-item-modal") &&
        !element.closest("#cz-cart-drawer") &&
        !element.closest("#cz-checkout-modal")
      ) {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          const card = element.closest(
            ".food-card, .deal-card, .popular-card, .hero-content",
          );
          let itemName = "Cheezology Special";
          let itemPrice = "Rs. 500";
          let itemDesc = "";
          let itemImg = "";

          if (card) {
            const nameEl = card.querySelector("h3, h2, .title");
            const priceEl = card.querySelector(".price, .deal-price");
            const descEl = card.querySelector("p, .desc");
            const imgEl = card.querySelector("img");

            if (nameEl) itemName = nameEl.textContent.trim();
            if (priceEl) itemPrice = priceEl.textContent.trim();
            if (descEl) itemDesc = descEl.textContent.trim();
            if (imgEl) itemImg = imgEl.src;
          }

          // Check if item exists in officialMenu to preserve multi-pricing (Pizzas/Fries)
          const matchedItem = officialMenu.find(
            (m) => m.name.toLowerCase() === itemName.toLowerCase(),
          );
          if (matchedItem) {
            triggerItemOrdering(matchedItem);
          } else {
            triggerItemOrdering({
              name: itemName,
              price: itemPrice,
              desc: itemDesc,
              image:
                itemImg ||
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
            });
          }
        });
      }
    });
  }

  // Initial execution calls
  injectOrderUI();
  renderMenu("all");
  renderDeals("single");
  bindExistingStaticButtons();

  // ==========================================
  // 10. Gallery Lightbox Handler
  // ==========================================
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  if (lightbox && lightboxImg) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const img = item.querySelector("img");
        if (img) {
          lightboxImg.src = img.src;
          lightbox.style.display = "flex";
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
      });
    }

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.style.display === "flex") {
        lightbox.style.display = "none";
      }
    });
  }
});
