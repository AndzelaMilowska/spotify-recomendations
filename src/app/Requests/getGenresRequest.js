import { UserAuthorizationRequest } from "./Authorization/requestUserAuth";
export class GetGenres {
  static getGenresRequest() {
    const data = JSON.parse(localStorage.getItem('acces_data'));
    let availableGenreURL = `https://api.spotify.com/v1/recommendations/available-genre-seeds`;
    return fetch(availableGenreURL, {
      method: "GET",
      headers: { 'Authorization': `${data.token_type} ${data.access_token}` }
    })

      .then(response => {
        if (!response.ok) {
          // UserAuthorizationRequest.restartPage()
          console.log('please clear local storage and refresh page')
          throw new Error('HTTP status ' + response.status);
        }
        return response.json();
      })

      .catch(error => {
        console.error('Error:', error);
      });
  }
}
