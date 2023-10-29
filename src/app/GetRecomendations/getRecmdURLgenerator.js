import { GenerateRecomendationsSourceList } from "../RecommendationsList/recomentadionsSource"
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
                GenerateRecomendationsSourceList.recomendationSource.map(element => {
                    return element.artists.map(artist => artist.id)
                }).toString()
            ,
            tracksIDs:
                GenerateRecomendationsSourceList.recomendationSource.map(element => element.ID).toString()
        }
        return recomendationsSourceIDs
    }

    static recUrlGenerator() {
        let sourcesIDs = RecomendationsURLGenerator.recomendationsSourceConverter()
        let URLbase = `https://api.spotify.com/v1/recommendations?`
        let urlGenerator = URLbase

        if (this.recomendationsFiltersObj.seedGenres.length > 0) {
            urlGenerator += '&seed_genres=' + `${encodeURIComponent(this.recomendationsFiltersObj.seedGenres.toString())}`
        }

        if (this.recomendationsFiltersObj.seedArtists) {
            urlGenerator += '&seed_artists=' + encodeURIComponent(sourcesIDs.artistsIDs)
        }

        if (URLbase === urlGenerator || this.recomendationsFiltersObj.seedTracks === true) {
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