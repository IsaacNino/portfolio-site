class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
        }

        nav {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          padding: 1rem 2rem;
        }

        nav.scrolled {
          padding: 0.5rem 2rem;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .logo {
          font-weight: 700;
          font-size: 1.25rem;
          color: #4f46e5;
          text-decoration: none;
        }

        /* Desktop nav */
        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }

        .nav-link:hover {
          color: #4f46e5;
        }

        .nav-link.active {
          color: #4f46e5;
        }

        .nav-link.active::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #4f46e5;
          border-radius: 2px;
        }

        /* Mobile menu button */
        .mobile-menu-button {
          display: none; /* hidden on desktop */
          background: none;
          border: none;
          color: #4f46e5; /* indigo */
          cursor: pointer;
          padding: 0.25rem;
          line-height: 0;
          width: 44px,
          height: 44px,
        }

        .mobile-menu-button svg {
          width: 28px;
          height: 28px;
          stroke: currentColor;
        }

        /* Mobile layout */
        @media (max-width: 768px) {
        .mobile-menu-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* The dropdown container */
        .nav-links {
          display: none;
          position: absolute;
          top: calc(100% + 0.6rem);
          right: 0;
          left: auto;

          width: min(260px, calc(100vw - 2rem));

          background: white;
          flex-direction: column;
          gap: 0.25rem;

          /* ✅ THIS is the container padding */
          padding: 0.25rem;

          border-radius: 0.75rem;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .nav-links.open {
          display: flex;
        }

        /* Each row is fully clickable */
        .nav-link {
          display: block;
          width: 100%;
          text-align: left;

          /* ✅ THIS is the per-item tap padding */
          padding: 0.75rem 0.9rem;

          border-radius: 0.6rem;
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .nav-link:hover {
          background: rgba(79, 70, 229, 0.08);
          color: #4f46e5;
        }
      }
      </style>

      <nav id="navbar">
        <div class="container">
          <a href="#home" class="logo">Isaac Nino</a>

          <button class="mobile-menu-button" aria-label="Open menu" aria-expanded="false">
            <i data-feather="menu"></i>
          </button>

          <div class="nav-links">
            <a href="#work" class="nav-link">Work</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#process" class="nav-link">Process</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </nav>
    `;

    const renderFeatherIcons = (root) => {
    if (!window.feather || !window.feather.icons) return;

    root.querySelectorAll("[data-feather]").forEach((el) => {
        const name = el.getAttribute("data-feather");
        const icon = window.feather.icons[name];
        if (!icon) return;

        el.outerHTML = icon.toSvg({
        width: 28,
        height: 28,
        "stroke-width": 2
        });
    });
    };

renderFeatherIcons(this.shadowRoot);

    const mobileMenuButton = this.shadowRoot.querySelector(".mobile-menu-button");
    const navLinks = this.shadowRoot.querySelector(".nav-links");

    mobileMenuButton.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked
    this.shadowRoot.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      });
    });

    // Scroll behavior for navbar
    window.addEventListener("scroll", () => {
      const navbar = this.shadowRoot.getElementById("navbar");
      if (window.scrollY > 50) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    });

    // Update active link based on scroll position (uses light DOM sections)
    const sections = document.querySelectorAll("section");
    const navLinksArray = this.shadowRoot.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute("id");
        }
      });

      navLinksArray.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
      });
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);