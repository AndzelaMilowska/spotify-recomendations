import { RecomendationListBuilder } from "./generateRecomendationsList";
import { GenerateRecomendationsSourceList } from "../RecommendationsList/recomentadionsSource";
import { PlaylistCreator } from "../Requests/PlaylistCreation/createPlaylistrunner";
export class RecomendationsListRenderer {
    static recomendationsDest = document.querySelector(".recomendations-list")
    static recomendationsBg = document.querySelector(".recomendations-list__background")
    static async renderRecomendationsList() {
        let recommendationsObj = await RecomendationListBuilder.generateRecomendationsObj()
        if (recommendationsObj == undefined) {
            this.recomendationsDest.innerHTML = ''
        }
        else {
            this.recomendationsBg.style.display = `flex`
            let recomendationsHeader = `<h2>Recommendations list:</h2> <button class="recomendations-list__button" id="createPlaylist_button">Create playlist</button>`
            let recomendationsListHTML = GenerateRecomendationsSourceList.generateListHTML(recommendationsObj, `p`)
            this.recomendationsDest.innerHTML = recomendationsHeader + recomendationsListHTML
            PlaylistCreator.createPlaylistBtnOn()
        }
    }

    static lookforQuit() {
        document.addEventListener("click", (evt) => {
            let clidkedEl = evt.target;
            if (clidkedEl == this.recomendationsBg) {
                this.recomendationsBg.style.display = `none`
            }
        });
    }
}