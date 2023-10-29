import { GenerateRecomendationsSourceList } from "./recomentadionsSource"
import { RemoveButton } from "./removeButton"
export class RecomendationsSourceRenderer {
    static renderSourcesList() {
        const recomendationsSourceDest = document.querySelector(".recomendations-sourcesList")
        let listSources = GenerateRecomendationsSourceList.recomendationSource
        if (!listSources[0]) {
            recomendationsSourceDest.innerHTML = ''
        }
        else {
            let recomendationSourcesHTML = GenerateRecomendationsSourceList.generateListHTML(listSources, "removebtn-component")
            recomendationsSourceDest.innerHTML = recomendationSourcesHTML
            RemoveButton.lookForBtnUse()
        }
    }
}

