class MHeader extends HTMLElement {
    constructor() {
        super();

        this.selectors = {
            header: this.parentElement,
            iconMenu: '[data-mobile-menu]',
            menu: '[data-mobile-menu-window]'
        }

        this.init();
    }

    init() {
        this.toggleMenu();
    }

    toggleMenu() {
        this.querySelector(this.selectors.iconMenu)?.addEventListener('click', () => {
            
        });
    }
}

customElements.define('m-header', MHeader);