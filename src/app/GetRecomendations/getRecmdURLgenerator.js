import { RecommendationSourceListGenerator } from "../RecommendationsList/recomentadionsSource"
import { RECOMENDATIONS_URL_BASE } from "../dataStorage"
export class RecomendationsURLGenerator {
    static recomendationsFiltersObj = {
        seedGenres: [],
        seedArtists: false,
        seedTracks: false,
        advancedFilters: {}
    }

    static recomendationsSourceConverter() {
        let recomendationsSourceIDs = {
            artistsIDs:
            RecommendationSourceListGenerator.recomendationSource.map(element => {
                    element.artists.map(artist => artist.id)
                }).toString()
            ,
            tracksIDs:
            RecommendationSourceListGenerator.recomendationSource.map(element => element.ID).toString()
        }
        return recomendationsSourceIDs
    }

    static recomendationsUrlGenerator() {
        let sourcesIDs = RecomendationsURLGenerator.recomendationsSourceConverter()
        let urlGenerator = RECOMENDATIONS_URL_BASE

        if (this.recomendationsFiltersObj.seedGenres.length > 0) {
            urlGenerator += '&seed_genres=' + `${encodeURIComponent(this.recomendationsFiltersObj.seedGenres.toString())}`
        }

        if (this.recomendationsFiltersObj.seedArtists) {
            urlGenerator += '&seed_artists=' + encodeURIComponent(sourcesIDs.artistsIDs)
        }

        if (RECOMENDATIONS_URL_BASE === urlGenerator || this.recomendationsFiltersObj.seedTracks === true) {
            urlGenerator += '&seed_tracks=' + encodeURIComponent(sourcesIDs.tracksIDs)
        }

        if (this.recomendationsFiltersObj.advancedFilters != {}) {
            let advancedFiltersArr = Object.entries(this.recomendationsFiltersObj.advancedFilters)
            for (let i = 0; i < advancedFiltersArr.length; i++) {
                urlGenerator += `&${advancedFiltersArr[i][0].toLowerCase()}=` + encodeURIComponent(advancedFiltersArr[i][1])
            }

        }
        return urlGenerator
    }

}