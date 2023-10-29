export class TokenRequest {
    static async accesTokenRequest(clientId, clientsecret) {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers:
            {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientsecret}`
        })
        const serverResponse = await response.json()
        return serverResponse
    }
}

