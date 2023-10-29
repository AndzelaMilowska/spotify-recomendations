import { clientData } from "../../../../clientData";

export class AuthorizationCode {
  static getAuthCode() {
    let codeVerifier = localStorage.getItem('code_verifier');
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    let body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: clientData.redirectURI,
      client_id: clientData.clientID,
      code_verifier: codeVerifier
    });
    return body;
  }
}

