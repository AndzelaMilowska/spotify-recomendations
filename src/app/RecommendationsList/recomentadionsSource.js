export class RecommendationSourceListGenerator {
    static recomendationSource = []
    static generateListHTML(sourceListArr, componentName) {
        let recomendationsSourceList = ""
        if (typeof sourceListArr != 'object') {
            return ''
        }
        sourceListArr.forEach(element => {
            recomendationsSourceList += ` 
            <search-result class="search-result" 
            buttonComponentName = ${componentName}
            coverImage="${element.coverImage}"
            trackName="${element.trackName}" 
            trackURL="${element.trackURL}"
            artistName="${element.artists[0].name}"
            artistURL="${element.artists[0].url}"
            albumName="${element.albumName}"
            albumURL="${element.albumURL}"
            trackTime="${element.duration}"
            ></search-result>`
        })
            return recomendationsSourceList
        
    }
}
