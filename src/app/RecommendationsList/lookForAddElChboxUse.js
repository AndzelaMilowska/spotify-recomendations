import { RecommendationSourceListGenerator } from "./recomentadionsSource"
import { RecomendationsSourceRenderer } from "./recomendationSourceRenderer";
import { ADD_ELEMENT_CHCECKBOX_SELECTOR } from "../dataStorage";
export class AddElementCheckbox {
    constructor() {
        this.checkboxButton
    }
    static lookForCheckboxUse(requestResult) {
        this.checkboxButton = document.querySelectorAll(ADD_ELEMENT_CHCECKBOX_SELECTOR)
        let resultsList = requestResult
        if (this.checkboxButton == undefined) {
            return
        }

        for (let i = 0; i < this.checkboxButton.length; i++) {
            this.checkboxButton[i].addEventListener("change", () => {
                if (this.checkboxButton[i].checked && !RecommendationSourceListGenerator.recomendationSource.some(e => e.ID === resultsList[i].ID) && RecommendationSourceListGenerator.recomendationSource.length < 5) {
                    RecommendationSourceListGenerator.recomendationSource.push(resultsList[i])
                    RecomendationsSourceRenderer.renderSourcesList()
                }

                else if (this.checkboxButton[i].checked && !RecommendationSourceListGenerator.recomendationSource.some(e => e.ID === resultsList[i].ID) && RecommendationSourceListGenerator.recomendationSource.length >= 5) {
                    this.checkboxButton[i].checked = false
                }

                else {
                    let uncheckedIndex = RecommendationSourceListGenerator.recomendationSource.findIndex(e => e.ID === resultsList[i].ID);
                    if (uncheckedIndex > -1) {
                        RecommendationSourceListGenerator.recomendationSource.splice(uncheckedIndex, 1);
                    }

                    RecomendationsSourceRenderer.renderSourcesList()
                }
            })
        }

    }
}
