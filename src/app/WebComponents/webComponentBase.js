export class CustomHTMLElement extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    }
}