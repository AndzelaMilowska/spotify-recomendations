import { TimeConverter } from "../../timeConverter"
import { RecommendationSourceListGenerator } from "../../RecommendationsList/recomentadionsSource"
import { SEARCH_RESULT_TRACKS_AMOUNT } from "../../dataStorage"
import { searchResultLayout } from "../../dataStorage"
import { ADD_ELEMENT_CHCECKBOX_SELECTOR } from "../../dataStorage"
export class GenerateSearchResultsList {
    static generateListObj(searchResponse) {
        let searchResult = searchResponse
        if (!searchResult) {
            return "no results"
        }
            let searchResultsObj = searchResult.tracks.items.map((track) => {
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
                }
            })
            return searchResultsObj

    }

    static generateListHTML(resultObj) {
        let newResultsObj = resultObj;
        let listHTML = ""
        if (typeof newResultsObj !== 'object') {
            return "no results"
        }
        newResultsObj.slice(0, SEARCH_RESULT_TRACKS_AMOUNT).forEach(element => {
            listHTML += searchResultLayout(element, "checkbox-component")
        });
        return listHTML
    }
    
    static setCheckboxesState(searchResultsObject) {
        let checkboxBtn = document.querySelectorAll(ADD_ELEMENT_CHCECKBOX_SELECTOR)
        for (let i = 0; i < checkboxBtn.length; i++) {
            if (RecommendationSourceListGenerator.recomendationSource.some(e => e.ID === searchResultsObject[i].ID)) {
                checkboxBtn[i].checked = true
            }
        }
    }
} 
