export class UserDataHttpService {
  static UserData
  static async getCurrendUserData() {
    const data = JSON.parse(localStorage.getItem('acces_data'));
    const response = await fetch('https://api.spotify.com/v1/me ', {
      method: "GET",
      headers: { 'Authorization': `${data.token_type} ${data.access_token}` }
    })
    this.UserData = await response.json()
  }

}
