class MHeader extends HTMLElement {
    constructor() {
        super();

        this.selectors = {
            iconMenu: '[data-mobile-menu]',
            menu: '[data-mobile-menu-window]',
            menuList: '[data-menu-list]',
        };

        this.init();
    }

    init() {
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleResize = this.handleResize.bind(this);

        window.addEventListener('resize', this.handleResize);

        this.querySelector(this.selectors?.iconMenu)?.addEventListener('click', this.toggleMenu);
        this.querySelector('.backdrop-blur-sm')?.addEventListener('click', this.toggleMenu);

        this.updateMenuLinks();
    }

    updateMenuLinks() {
        this.querySelector(this.selectors.menuList)?.querySelectorAll('a')?.forEach(link => {
            link.removeEventListener('click', this.toggleMenu);
            if (window.innerWidth < 1024) {
                link.addEventListener('click', this.toggleMenu);
            }
        });
    }

    handleResize() {
        this.updateMenuLinks();
    }

    toggleMenu() {
        const iconMenu = this.querySelector(this.selectors?.iconMenu);
        const menuList = this.querySelector(this.selectors?.menuList);
        const header = document.querySelector('header');

        const isOpen = iconMenu?.dataset.mobileMenu === 'true';
        iconMenu.setAttribute('data-mobile-menu', !isOpen);
        document.body.classList.toggle('overflow-hidden');
        this.querySelector('.backdrop-blur-sm')?.classList.toggle('hidden');
        menuList?.classList.toggle('open-menu-list');
        menuList.style.top = menuList.classList.contains('open-menu-list') ? `${header.offsetHeight}px` : '0px';
    }
}

customElements.define('m-header', MHeader);
