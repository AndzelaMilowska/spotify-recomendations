import { clientData } from '../../../../clientData';
import { RandomStringGenerator } from './randomStringGen';
import { CodeChallengeGenerator } from './codeChallengeGen';
export class UserAuthorizationRequest {
    static async getRequestArguments() {
        const clientId = clientData.clientID;
        const redirectUri = clientData.redirectURI;
        let codeVerifier = RandomStringGenerator.generateRandomString(128);
        let state = RandomStringGenerator.generateRandomString(16);
        let scope = 'user-read-private user-read-email playlist-modify-private playlist-modify-public';
        let codeChallenge = await CodeChallengeGenerator.generateCodeChallenge(codeVerifier)
        if (!localStorage.getItem('code_verifier')) {
            localStorage.setItem('code_verifier', codeVerifier);
        }
        else {
            codeVerifier = localStorage.getItem('code_verifier')
        }

        let args = new URLSearchParams({
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            state: state,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge
        });
        return args;
    }

    static async makeUserAuthRequest() {
        if (localStorage.getItem('reloaded') < 1) {
            localStorage.setItem('reloaded', 'reloaded');
            let args = await UserAuthorizationRequest.getRequestArguments();
            window.location = 'https://accounts.spotify.com/authorize?' + args;
        }
    }

    static restartPage() {
        console.log('error here')
        localStorage.clear()
        location.replace('http://localhost:3000/')
    }
}


