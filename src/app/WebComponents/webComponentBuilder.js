export class CustomHTMLElementBuilder {
    static createCustomElement(tagName, ctor) {
        window.customElements.define(tagName, ctor);
    }
}