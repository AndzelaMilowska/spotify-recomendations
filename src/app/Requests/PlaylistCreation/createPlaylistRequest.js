import { CurrentUserRequest } from "../getCurrentUser";
import { RecomendationListBuilder } from "../../GetRecomendations/generateRecomendationsList";

export class CreatePlaylistRequests {
    static newPlaylistData
    static recomendationsUrisData

    static async createPlaylistRequest() {
        const data = JSON.parse(localStorage.getItem('acces_data'));
        const userID = await CurrentUserRequest.UserData.id
        const response = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: "POST",
            headers: {
                'Authorization': `${data.token_type} ${data.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': `Recomendations`,
                "description": "",
                "public": false
            })
        })
        this.newPlaylistData = await response.json()
    }

    static generateTracksUriArr() {
        this.recomendationsUrisData = RecomendationListBuilder.recomendationsObject.map(track => { return track.uri.toString() })
    }

    static async addItemsToPlaylist(playlistID, itemsArr) {
        const data = JSON.parse(localStorage.getItem('acces_data'));
        await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            method: "POST",
            headers: {
                'Authorization': `${data.token_type} ${data.access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "uris":
                    itemsArr
                ,
                "position": 0
            })
        })
    }
}

