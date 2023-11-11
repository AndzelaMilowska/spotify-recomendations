import { RecommendationSourceListGenerator } from "./recomentadionsSource"
import { RECOMENDATIONS_SOURCES_SELECTOR } from "../dataStorage"
import { REMOVE_BUTTON_WEB_COMPONENT_TAG_NAME } from "../dataStorage"
import { RemoveButton } from "./removeButton"
export class RecomendationsSourceRenderer {
    static renderSourcesList() {
        const recomendationsSourceDest = document.querySelector(RECOMENDATIONS_SOURCES_SELECTOR)
        let listSources = RecommendationSourceListGenerator.recomendationSource
        if (!listSources[0]) {
            recomendationsSourceDest.innerHTML = ''
        }
        else {
            let recomendationSourcesHTML = RecommendationSourceListGenerator.generateListHTML(listSources, REMOVE_BUTTON_WEB_COMPONENT_TAG_NAME)
            recomendationsSourceDest.innerHTML = recomendationSourcesHTML
            RemoveButton.lookForBtnUse()
        }
    }
}

