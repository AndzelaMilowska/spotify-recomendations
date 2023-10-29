import htmlLayout from '../../layouts/AddElementCheckbox.html'
export class CheckboxComponent extends HTMLElement {
  static elementTagName = 'checkbox-component';
  connectedCallback() {
    this.innerHTML = htmlLayout;
  }
}
