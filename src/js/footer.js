class MFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.querySelector('span').textContent = new Date().getFullYear();
    }
}

customElements.define('m-footer', MFooter);
