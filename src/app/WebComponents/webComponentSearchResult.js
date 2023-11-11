import htmlLayout from '../../layouts/searchResult.html'

export class SearchResult extends HTMLElement {
  static elementTagName = 'search-result';
  connectedCallback() {
    const coverImage = this.getAttribute('coverImage');
    const trackName = this.getAttribute('trackName');
    const trackURL = this.getAttribute('trackURL');
    const artistName = this.getAttribute('artistName');
    const artistURL = this.getAttribute('artistURL');
    const albumName = this.getAttribute('albumName');
    const albumURL = this.getAttribute('albumURL');
    const trackTime = this.getAttribute('trackTime');
    const button = this.getAttribute('buttonComponentName')
    this.innerHTML = `<${button}> </${button}>
      <img class="search-result__cover-image" src="${coverImage}"
          alt="${albumName}" width="40" height="40">
      <div class="search-result__track-core-data">
          <a class="search-result__track-name" target="_blank" href="${trackURL}">${trackName}</a>
          <a class="search-result__artist-name" target="_blank" href="${artistURL}">${artistName}</a>
      </div>
      <a class="search-result__album-name" href="${albumURL}"> ${albumName} </a>
      <div class="search-result__track-time">${trackTime}</div>`
  }
}