class ScrollToTop extends HTMLElement {
    constructor() {
        super();
        this.hideOnTop = this.hideOnTop.bind(this);
    }

    connectedCallback() {
        this.addEventListener('click', () => window.scrollTo(0, 0));
        document.addEventListener('scroll', this.hideOnTop);
        // Initial check
        this.hideOnTop();
    }

    hideOnTop() {
        const headerHeight = document.querySelector('header').offsetHeight;

        if (!headerHeight) {
            return;
        }

        if (document.documentElement.scrollTop >= headerHeight && this.classList.contains('hidden')) {
            this.classList.remove('hidden');
        } else if (document.documentElement.scrollTop < headerHeight && !this.classList.contains('hidden')) {
            this.classList.add('hidden');
        }
    }
}

customElements.define('scroll-top', ScrollToTop);
