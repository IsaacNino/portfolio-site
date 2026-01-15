document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // Back to Top Button
  // =========================
  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove("opacity-0", "invisible");
        backToTopButton.classList.add("opacity-100", "visible");
      } else {
        backToTopButton.classList.remove("opacity-100", "visible");
        backToTopButton.classList.add("opacity-0", "invisible");
      }
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =========================
  // Project Data
  // =========================
  const PROJECTS = {
    "ces-postcard": {
      title: "CES Generative AI Postcard",
      tags: ["AI", "Web", "FLUX"],
      image: "assets/ces.webp",
      overview:
        "A lightweight, QR-based generative postcard experience for CES that blends AI imagery with event-specific design to create instantly personalized, shareable visuals.",
      did: [
        "Designed the end-to-end concept for a lightweight, scan-to-generate experience optimized for live events",
        "Built a generative visual system that combines static brand overlays with AI-generated backgrounds",
        "Implemented a fast, browser-based flow that prioritizes immediacy, accessibility, and shareability",
      ],
      tech: [
        "Modular prompt + layout system enabling rapid iteration across themes and events",
        "Clear separation between generative layers and fixed design elements for brand consistency",
        "Optimized for low-friction usage (no installs, minimal input, fast generation)",
        "Built with scalability in mind, allowing the same framework to support future events or campaigns",
      ],
      links: [{ label: "Project", href: "https://cespostcard26.vercel.app/" }],
    },

    "fw-2025": {
      title: "MSDF Foundation Week 2025",
      tags: ["UX", "UI", "Web Development"],
      image: "assets/msdf.webp",
      overview:
        "A web-based digital gallery experience designed to present archival content and storytelling in a calm, accessible, museum-like interface that prioritizes clarity, pacing, and exploration of the work done by the Michael & Susan Dell Foundation.",
      did: [
        "Designed the overall information architecture and interaction model for a digital-first museum experience",
        "Built a modular gallery system that supports layered content, storytelling, and future expansion",
        "Implemented responsive layouts and interaction patterns that balance visual presence with readability",
        "Collaborated closely across design and technical considerations to ensure the experience felt intentional, not overloaded",
      ],
      tech: [
        "Modular component structure enabling galleries, sections, and content types to scale independently",
        "Clear separation between content, layout, and interaction logic for maintainability",
        "Responsive, performance-minded implementation suitable for a wide range of devices",
        "UX decisions focused on reducing cognitive load while still encouraging exploration",
      ],
      links: [{ label: "Project", href: "https://digital-museum-gallery.vercel.app/" }],
    },

    "share-coke": {
      title: "Share-A-Coke Memeory Maker",
      tags: ["AI", "Cloud Pipelines", "Stable Diffusion"],
      image: "assets/shareACoke.webp",
      overview:
        "An AI-powered memory remix experience that uses generative models and cloud-based video rendering to turn personal moments into shareable, animated content.",
      did: [
        "Explored, tested, and validated Stable Diffusion models to support generative image workflows within a larger production pipeline",
        "Helped shape how generative outputs could be reliably used on the backend as part of a scalable AI system",
        "Tested and iterated on FFmpeg scripts to support video assembly, animation, and rendering in a cloud environment",
        "Collaborated across technical and creative constraints to ensure the generative layer was both expressive and production-ready",
      ],
      tech: [
        "Deepened understanding of the Stable Diffusion ecosystem, including model selection, strengths, and tradeoffs",
        "Validated generative workflows that could be integrated into a cloud-rendered production pipeline",
        "Supported reliable image-to-video transformation using FFmpeg-based processing",
        "Helped reduce uncertainty around how generative AI could be practically deployed at scale within a branded experience",
      ],
      links: [],
    },

    "funko-pop": {
      title: "Funko POP! Yourself",
      tags: ["AR", "TikTok", "Effect House", "UI"],
      image: "assets/funkoPOP.webp",
      overview:
        "A personalized virtual try-on experience that lets users see themselves as a Funko POP!, bridging playful self-expression with a direct path to product creation.",
      did: [
        "Recreated the core Pop! Yourself website customization flow inside a TikTok Branded AR effect, ensuring the UI logic and user journey translated intuitively to an in-camera experience",
        "Collaborated closely with 3D artists to validate and optimize character models, ensuring all assets met strict performance and file size constraints",
        "Helped design and implement a real-time personalization system allowing users to select skin tone, facial features, hair, and accessories",
        "Ensured the AR experience remained faithful to the physical product while staying fast, playful, and easy to use",
      ],
      tech: [
        "Built a modular customization system that dynamically updates facial features and accessories in real time",
        "Balanced visual fidelity with performance to support smooth playback across a wide range of devices",
        "Maintained parity between the AR representation and the actual purchasable product to reinforce trust and conversion",
        "Designed the experience to scale across thousands of unique user combinations without feeling repetitive",
      ],
      links: [{ label: "Video", href: "https://www.tiktok.com/@rug/video/7280624024344956206" }],
    },

    "women-sports": {
      title: "Cadbury Women In Sports",
      tags: ["AI", "Purpose-Driven UX", "Web"],
      image: "assets/cadbury.webp",
      overview:
        "An AI-powered poster generation experience that helps young girls visualize themselves as athletes, transforming personal photos into celebratory, sports-inspired imagery.",
      did: [
        "Supported the generative AI layer of the experience by researching, testing, and validating Stable Diffusion models used to create sports-themed background imagery",
        "Evaluated model quality, consistency, and stylistic fit to ensure outputs aligned with the campaign’s tone and message",
        "Helped shape how generative backgrounds could be reliably integrated into a larger poster-creation pipeline",
        "Collaborated with the broader team to ensure the AI layer enhanced storytelling without overwhelming the user experience",
      ],
      tech: [
        "Identified and validated Stable Diffusion models capable of producing consistent, on-brand sports imagery",
        "Helped reduce risk around generative quality by testing edge cases and output variability",
        "Supported a scalable image-generation workflow suitable for a high-traffic, user-generated experience",
        "Contributed to a production-ready AI system where creativity, reliability, and purpose were equally important",
      ],
      links: [],
    },

    "heinz-shake": {
      title: "Kraft Heinz Make It Shake",
      tags: ["AR", "TikTok", "Effect House", "Gamified UX"],
      image: "assets/kraft-heinz.webp",
      overview:
        "A dance-driven AR experience built in Effect House that turns learning ‘how to shake’ Heinz ketchup into a playful, replayable interaction.",
      did: [
        "Designed the interaction flow and game mechanics for repeat play",
        "Built the experience in Effect House using visual scripting + state logic",
        "Tuned timing, feedback, and UX to encourage participation and sharing",
      ],
      tech: [
        "State-based flow to support replayable playthroughs",
        "Modular logic blocks for easy iteration and content swaps",
        "Guardrails to prevent edge-case lockups and ensure smooth resets",
        "Performance-minded effects and lightweight UI feedback",
      ],
      links: [
        {
          label: "Video",
          href: "https://drive.google.com/file/d/1w52GDZTHv2I71jhaPL5NBh8bRKQGw3lD/view",
        },
      ],
    },
  };

  // =========================
  // Project Filtering
  // =========================
  const filterChips = document.querySelectorAll(".filter-chip");

  function applyFilter(filter) {
    const cards = Array.from(document.querySelectorAll("project-card"));
    cards.forEach((card) => {
      const category = (card.getAttribute("category") || "").toLowerCase();
      const show = filter === "all" || category === filter;
      card.style.display = show ? "" : "none";
    });
  }

  if (filterChips.length) {
    filterChips.forEach((chip) => {
      chip.addEventListener("click", function () {
        filterChips.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        applyFilter(this.dataset.filter);

        // Optional debug (accurate now)
        console.log(
          "clicked:",
          this.dataset.filter,
          "active?",
          this.classList.contains("active")
        );
      });
    });

    applyFilter("all");
  }

  // =========================
  // Contact Form -> /api/contact
  // =========================
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        // read JSON safely so we can surface server errors
        const data = await res.json().catch(() => ({}));

        if (!res.ok || !data.ok) {
          console.error("Contact form error:", data);
          throw new Error(data.error || "Failed");
        }

        alert("Message sent! 🚀");
        form.reset();
      } catch (err) {
        console.error(err);
        alert("Something went wrong. Try again.");
      }
    });
  }

  // =========================
  // Smooth scrolling for anchor links
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  // =========================
  // Fade-in on scroll
  // =========================
  const animateOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-fadeIn");
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll("section").forEach((section) => {
    animateOnScroll.observe(section);
  });

  // =========================
  // Modal wiring
  // =========================
  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalTags = document.getElementById("modal-tags");
  const modalImage = document.getElementById("modal-image");
  const closeModalBtn = document.getElementById("close-project-modal");

  function openModalWithProject(projectId) {
    if (!modal || !modalTitle || !modalTags || !modalImage) return;

    const project = PROJECTS[projectId];
    if (!project) {
      console.warn("No project data found for:", projectId);
      return;
    }

    // Header
    modalTitle.textContent = project.title || "";
    modalTags.textContent = (project.tags || []).join(" • ");

    // Image
    if (project.image) {
      modalImage.src = project.image;
      modalImage.alt = project.title || "";
      modalImage.classList.remove("hidden");
    } else {
      modalImage.classList.add("hidden");
    }

    // Body
    const body = modal.querySelector(".modal-body");
    if (body) {
      const didList = (project.did || []).map((x) => `<li>${x}</li>`).join("");
      const techList = (project.tech || []).map((x) => `<li>${x}</li>`).join("");

      const links = (project.links || [])
        .map(
          (l) =>
            `<a class="inline-flex items-center px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-sm font-medium" href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`
        )
        .join("");

      body.innerHTML = `
        ${
          project.overview
            ? `<p class="text-slate-700 leading-relaxed">${project.overview}</p>`
            : ""
        }

        ${
          project.did?.length
            ? `
          <section>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2 section-heading">What I did</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-700">
              ${didList}
            </ul>
          </section>
        `
            : ""
        }

        ${
          project.tech?.length
            ? `
          <section>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2 section-heading">Technical wins</h3>
            <ul class="list-disc pl-5 space-y-1 text-slate-700">
              ${techList}
            </ul>
          </section>
        `
            : ""
        }

        ${
          project.links?.length
            ? `
          <section>
            <h3 class="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-2 section-heading">Links</h3>
            <div class="flex flex-wrap gap-2">
              ${links}
            </div>
          </section>
        `
            : ""
        }
      `;
    }

    // Open modal
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Listen for project-card event
  document.addEventListener("open-project", (e) => {
    const { projectId } = e.detail || {};
    openModalWithProject(projectId);
  });

  // Close handlers
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});