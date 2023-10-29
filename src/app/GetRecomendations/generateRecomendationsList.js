import { RecomendationsRequest } from "./getRecomendationsRequest";
import { TimeConverter } from "../timeConverter";

export class RecomendationListBuilder {
    static recomendationsObject
    static async generateRecomendationsObj() {
        let response = await RecomendationsRequest.getRecomendationsRequest()
        
        if (response) {
            let recomendationsObj = response.tracks.map((track) => {
                return {
                    coverImage: track.album.images[0].url,
                    trackName: track.name,
                    trackURL: track.external_urls.spotify,
                    artists: track.artists.map((artist) => {
                        return {
                            name: artist.name,
                            id: artist.id,
                            url: artist.external_urls.spotify
                        }
                    }),
                    albumName: track.album.name,
                    albumURL: track.album.external_urls.spotify,
                    duration: TimeConverter.convertTime(track.duration_ms),
                    ID: track.id,
                    uri: track.uri
                }
            }
            )
            this.recomendationsObject = recomendationsObj
            return recomendationsObj
        }
    }
}