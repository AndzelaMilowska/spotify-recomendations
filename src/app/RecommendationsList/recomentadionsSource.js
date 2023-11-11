import { searchResultLayout } from "../dataStorage"
export class RecommendationSourceListGenerator {
    static recomendationSource = []
    static generateListHTML(sourceListArr, componentName) {
        let recomendationsSourceList = ""
        if (typeof sourceListArr != 'object') {
            return ''
        }
        sourceListArr.forEach(element => {
            recomendationsSourceList +=  searchResultLayout(element, componentName)
        })
            return recomendationsSourceList
        
    }
}
