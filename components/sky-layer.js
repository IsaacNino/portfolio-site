class SkyLayer extends HTMLElement {
    static get observedAttributes() {
        return ['depth'];
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
        const depth = this.getAttribute('depth') || '0';
        const speeds = ['0.2', '0.4', '0.6'];
        const opacities = ['0.2', '0.4', '0.6'];
        const blurAmounts = ['2px', '4px', '6px'];
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(239, 246, 255, 0) 0%, rgba(224, 231, 255, 0.5) 100%);
                    will-change: transform;
                    animation: float ${10 - depth * 2}s ease-in-out infinite;
                    animation-delay: ${depth * 0.5}s;
                    filter: blur(${blurAmounts[depth]});
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    25% {
                        transform: translateY(-${depth * 5}px) translateX(${depth * 2}px);
                    }
                    50% {
                        transform: translateY(${depth * 3}px) translateX(-${depth * 4}px);
                    }
                    75% {
                        transform: translateY(${depth * 5}px) translateX(${depth * 3}px);
                    }
                }
            </style>
        `;
    }
}

customElements.define('sky-layer', SkyLayer);