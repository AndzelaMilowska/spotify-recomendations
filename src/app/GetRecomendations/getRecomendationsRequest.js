import { RecomendationsURLGenerator } from "./getRecmdURLgenerator";
export class RecomendationsRequest {
  static getRecomendationsRequest() {
    let requestURL = RecomendationsURLGenerator.recUrlGenerator()
    const data = JSON.parse(localStorage.getItem('acces_data'));
    return fetch(requestURL, {
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