class ScreenLoader extends HTMLElement {
    constructor() {
        super();

        let stateCheck = setInterval(() => {
            if (document.readyState === 'complete') {
              clearInterval(stateCheck);
              document.querySelector('#app')?.removeAttribute('style');
              this.remove();
            }
          }, 100);
    }
}

customElements.define('screen-loader', ScreenLoader);
