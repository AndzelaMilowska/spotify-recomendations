export class GenerateRecomendationsSourceList {
    static recomendationSource = []
    static generateListHTML(sourceListArr, componentName) {
        let recomendationsSourceList = ""
        if (typeof sourceListArr === 'object') {
            for (let j = 0; j < sourceListArr.length; j++) {
                recomendationsSourceList += ` 
            <search-result class="search-result" 
            buttonComponentName = ${componentName}
            coverImage="${sourceListArr[j].coverImage}"
            trackName="${sourceListArr[j].trackName}" 
            trackURL="${sourceListArr[j].trackURL}"
            artistName="${sourceListArr[j].artists[0].name}"
            artistURL="${sourceListArr[j].artists[0].url}"
            albumName="${sourceListArr[j].albumName}"
            albumURL="${sourceListArr[j].albumURL}"
            trackTime="${sourceListArr[j].duration}"
            ></search-result>`
            }
            return recomendationsSourceList
        }
        else {
            return ''
        }
    }
}
