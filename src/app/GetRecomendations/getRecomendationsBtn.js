import { RecomendationsListRenderer } from "./recomendationsListRenderer"
export class GetRecomendationsBtn {
    static getRecomendations() {
        let getRecomendationsBtn = document.querySelector(".get-recomendationsButton")
        getRecomendationsBtn.addEventListener('click', () => {
            RecomendationsListRenderer.renderRecomendationsList()
            RecomendationsListRenderer.lookforQuit()
        })
    }
}