export class FilterRange extends HTMLElement {
  static elementTagName = 'range-filter';
  connectedCallback() {
    const name = this.getAttribute('name');
    const min = this.getAttribute('min');
    const max = this.getAttribute('max');
    const step = this.getAttribute('step')
    this.innerHTML = `
      <label for="${name}" class="range-filter__label">${name}</label>  
      <input type="range" id="${name}" value="${min}" name="${name}" class="range-filter__input" min="${min}" max="${max}" step="${step}" />`
  }
}