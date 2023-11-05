import { AuthorizationCode } from "./authorizationCode";
import { UserAuthorizationRequest } from "./requestUserAuth";
import { AUTHORIZATION_TOKEN_URL } from "../../dataStorage";

export class AccesToken {
    static async accesTokenRequest(body) {
        const response = await fetch(AUTHORIZATION_TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body.toString()
        })
        let data = await response.json()
        localStorage.setItem('access_token', await data.access_token);
        localStorage.setItem('acces_data', JSON.stringify(await data))
    }

    static async getAccesToken() {
        if (!localStorage.getItem('access_token')) {
            UserAuthorizationRequest.makeUserAuthRequest()
            let body = AuthorizationCode.getAuthCode()
            await this.accesTokenRequest(body)
            let accesToken = localStorage.getItem('access_token')
            return accesToken
        }
        else {
            let accesToken = localStorage.getItem('access_token')
            return accesToken
        }
    }
}

