import { TimeConverter } from "../../timeConverter"
import { GenerateRecomendationsSourceList } from "../../RecommendationsList/recomentadionsSource"
export class GenerateSearchResultsList {
    static generateListObj(searchResponse) {
        let searchResult = searchResponse
        if (searchResult) {
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
        else {
            return "no results"
        }

    }

    static generateListHTML(resultObj) {
        let newResultsObj = resultObj;
        let listHTML = ""
        if (typeof newResultsObj === 'object') {
            for (let j = 0; j < 10; j++) {
                listHTML += ` 
                <search-result class="search-result" 
                buttonComponentName = "checkbox-component"
                coverImage="${newResultsObj[j].coverImage}"
                trackName="${newResultsObj[j].trackName}" 
                trackURL="${newResultsObj[j].trackURL}"
                artistName="${newResultsObj[j].artists[0].name}"
                artistURL="${newResultsObj[j].artists[0].url}"
                albumName="${newResultsObj[j].albumName}"
                albumURL="${newResultsObj[j].albumURL}"
                trackTime="${newResultsObj[j].duration}"
                ></search-result>`
            }
            return listHTML
        }
        else {
            return "no results"
        }
    }
    
    static setCheckboxesState(searchResultsObject) {
        let checkboxBtn = document.querySelectorAll(".addElement-checkbox")
        for (let i = 0; i < checkboxBtn.length; i++) {
            if (GenerateRecomendationsSourceList.recomendationSource.some(e => e.ID === searchResultsObject[i].ID)) {
                checkboxBtn[i].checked = true
            }
        }
    }
} 
