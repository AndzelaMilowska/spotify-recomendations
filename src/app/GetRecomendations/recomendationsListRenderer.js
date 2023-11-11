import { RecomendationListBuilder } from "./generateRecomendationsList";
import { RecommendationSourceListGenerator } from "../RecommendationsList/recomentadionsSource";
import { PlaylistCreator } from "../Requests/PlaylistCreation/createPlaylistrunner";
import { RECOMENDATIONS_HEADER_LAYOUT } from "../dataStorage";
import { RECOMENDATIONS_LIST_BACKGROUND_SELECTOR } from "../dataStorage";
import { RECOMENDATIONS_LIST_SELECTOR } from "../dataStorage";
export class RecomendationsListRenderer {
    static recomendationsDest = document.querySelector(RECOMENDATIONS_LIST_SELECTOR)
    static recomendationsBg = document.querySelector(RECOMENDATIONS_LIST_BACKGROUND_SELECTOR)
    static async renderRecomendationsList() {
        await RecomendationListBuilder.generateRecomendationsObj()
        let recommendationsObj = RecomendationListBuilder.recomendationsObject
        if (recommendationsObj == undefined) {
            RecomendationsListRenderer.recomendationsDest.innerHTML = ''
        }
        else {
            RecomendationsListRenderer.recomendationsBg.style.display = `flex`
            let recomendationsHeader = RECOMENDATIONS_HEADER_LAYOUT
            let recomendationsListHTML = RecommendationSourceListGenerator.generateListHTML(recommendationsObj, `p`)
            RecomendationsListRenderer.recomendationsDest.innerHTML = recomendationsHeader + recomendationsListHTML
            PlaylistCreator.createPlaylistBtnOn()
        }
    }

    static lookforQuit() {
        document.addEventListener("click", (evt) => {
            let clidkedEl = evt.target;
            if (clidkedEl == RecomendationsListRenderer.recomendationsBg) {
                RecomendationsListRenderer.recomendationsBg.style.display = `none`
            }
        });
    }
}