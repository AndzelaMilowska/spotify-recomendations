import { SearchURL } from "./generateSearchURL";

export class SearchRequest {
  static runSearchRequest() {
    const data = JSON.parse(localStorage.getItem('acces_data'));
    let searchURL = SearchURL.generateSearchURL();
    return fetch(searchURL, {
      method: "GET",
      headers: { 'Authorization': `${data.token_type} ${data.access_token}` }
    })

      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })

      .catch(error => {
        console.error('Error:', error);
      });
  }
}
