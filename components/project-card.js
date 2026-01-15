class ProjectCard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'category', 'tags', 'image'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const title = this.getAttribute('title') || 'Project Title';
    const category = this.getAttribute('category') || 'web';
    const tags = this.getAttribute('tags') || '';
    const image = this.getAttribute('image') || 'http://static.photos/technology/640x360/1';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .card {
          background: white;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                      0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .image-container {
          height: 200px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #1e293b;
        }

        .category {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          max-width: 100%;
          padding: 0.25rem 0.75rem;
          background: #e0e7ff;
          color: #4f46e5;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .tags {
          color: #64748b;
          font-size: 0.875rem;
          margin-top: auto;
        }

        .view-button {
          margin-top: 1rem;
          color: #4f46e5;
          font-weight: 500;
          text-decoration: none;
          pointer-events: none; /* click handled on card */
        }
      </style>

      <div class="card" data-category="${category}">
        <div class="image-container">
          <img src="${image}" alt="${title}">
        </div>
        <div class="content">
          <h3 class="title">${title}</h3>
          <span class="category">${category}</span>
          <p class="tags">${tags}</p>
          <span class="view-button">
            View Project →
          </span>
        </div>
      </div>
    `;

    const card = this.shadowRoot.querySelector('.card');
    const projectId = this.getAttribute("project-id");

    card.addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('open-project', {
          bubbles: true,
          composed: true, // 🚨 REQUIRED to escape shadow DOM
          detail: {
            title,
            category,
            tags,
            image,
            projectId
          }
        })
      );
    });

    if (window.feather) {
      feather.replace();
    }
  }
}

customElements.define('project-card', ProjectCard);