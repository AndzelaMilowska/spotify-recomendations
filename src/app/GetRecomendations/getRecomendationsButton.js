import { RecomendationsListRenderer } from "./recomendationsListRenderer"
import { GET_RECOMENDATIONS_BUTTON } from "../dataStorage"
export class GetRecomendationsButton {
    static getRecomendations() {
        let getRecomendationsButton = document.querySelector(GET_RECOMENDATIONS_BUTTON)
        getRecomendationsButton.addEventListener('click', () => {
            RecomendationsListRenderer.renderRecomendationsList()
            RecomendationsListRenderer.lookforQuit()
        })
    }
}