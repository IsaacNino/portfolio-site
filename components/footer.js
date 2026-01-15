class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-top: 1px solid rgba(255, 255, 255, 0.18);
                }
                
                footer {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                    text-align: center;
                }
                
                .copyright {
                    color: #64748b;
                    font-size: 0.875rem;
                }
                
                .social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                }
                
                .social-link {
                    color: #64748b;
                    transition: color 0.2s;
                }
                
                .social-link:hover {
                    color: #4f46e5;
                }
            </style>
            
            <footer>
                <div class="social-links">
                    <a href="#" class="social-link" aria-label="Twitter">
                        <i data-feather="twitter"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="GitHub">
                        <i data-feather="github"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="LinkedIn">
                        <i data-feather="linkedin"></i>
                    </a>
                    <a href="#" class="social-link" aria-label="Instagram">
                        <i data-feather="instagram"></i>
                    </a>
                </div>
                <p class="copyright">
                    &copy; ${new Date().getFullYear()} Isaac Nino. All rights reserved.
                </p>
            </footer>
        `;
        
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);