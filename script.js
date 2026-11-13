// =========================================
// AUREON — FRONT-END INTERACTIONS
// =========================================

// MOBILE NAVIGATION

const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute(
      "aria-expanded",
      String(!isOpen)
    );

    mainNav.classList.toggle("is-open", !isOpen);

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );
  });

  // Close the mobile menu after selecting a navigation link.

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}


// =========================================
// SIMULATED MARKET DATA
// =========================================

// This is a visual demonstration only.
// It is NOT connected to a real market-data API.

const marketClock = document.querySelector("#marketClock");
const heroPrice = document.querySelector("#heroPrice");
const heroChange = document.querySelector("#heroChange");

let demoPrice = 1.08426;

function updateDemoMarket() {

  // Update the clock.

  if (marketClock) {
    marketClock.textContent = new Date().toLocaleTimeString(
      "en-GB",
      {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }
    );
  }

  // Generate a small illustrative price movement.

  if (heroPrice && heroChange) {

    const movement = (Math.random() - 0.47) * 0.00008;

    demoPrice += movement;

    heroPrice.textContent = demoPrice.toFixed(5);

    const change =
      ((demoPrice - 1.0823) / 1.0823) * 100;

    const positive = change >= 0;

    heroChange.innerHTML =
      `${positive ? "↗ +" : "↘ "}${change.toFixed(2)}% <span>demo</span>`;

    heroChange.style.color = positive
      ? "var(--green)"
      : "var(--red)";
  }
}

// Run once immediately.

updateDemoMarket();

// Update the illustrative market preview every 3.5 seconds.

window.setInterval(updateDemoMarket, 3500);


// =========================================
// CONTACT FORM
// =========================================

// This form validates locally.
// It does not send or store submitted information.

const contactForm = document.querySelector("#contactForm");
const formFeedback = document.querySelector("#formFeedback");

if (contactForm && formFeedback) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.querySelector("#email");

    if (!email || !email.checkValidity()) {

      formFeedback.textContent =
        "Please enter a valid email address.";

      formFeedback.style.color = "var(--red)";

      email?.focus();

      return;
    }

    formFeedback.textContent =
      "Thanks! This is a demo form — no information was sent or stored.";

    formFeedback.style.color = "var(--green)";

    contactForm.reset();
  });
}


// =========================================
// FAQ ACCORDION
// =========================================

// Only one FAQ answer stays open at a time.

const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((item) => {

  item.addEventListener("toggle", () => {

    if (!item.open) return;

    faqItems.forEach((other) => {

      if (other !== item) {
        other.open = false;
      }

    });

  });

});


// =========================================
// AUTOMATIC FOOTER YEAR
// =========================================

const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}
