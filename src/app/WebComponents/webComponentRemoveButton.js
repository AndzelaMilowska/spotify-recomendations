import htmlLayout from '../../layouts/RemoveButton.html'

export class RemoveButtonComponent extends HTMLElement {
  static elementTagName = 'removebtn-component';
  connectedCallback() {
    this.innerHTML = htmlLayout;
  }
}
