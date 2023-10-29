import { GenerateRecomendationsSourceList } from "./recomentadionsSource"
import { RecomendationsSourceRenderer } from "./recomendationSourceRenderer";
export class AddElementCheckbox {
    constructor() {
        this.checkboxBtn = checkboxCheck
    }
    static lookForCheckboxUse(requestResult) {
        this.checkboxBtn = document.querySelectorAll(".addElement-checkbox")
        let resultsList = requestResult
        if (this.checkboxBtn) {
            for (let i = 0; i < this.checkboxBtn.length; i++) {
                this.checkboxBtn[i].addEventListener("change", () => {
                    if (this.checkboxBtn[i].checked && !GenerateRecomendationsSourceList.recomendationSource.some(e => e.ID === resultsList[i].ID) && GenerateRecomendationsSourceList.recomendationSource.length < 5) {
                        GenerateRecomendationsSourceList.recomendationSource.push(resultsList[i])
                        RecomendationsSourceRenderer.renderSourcesList()
                    }

                    else if (this.checkboxBtn[i].checked && !GenerateRecomendationsSourceList.recomendationSource.some(e => e.ID === resultsList[i].ID) && GenerateRecomendationsSourceList.recomendationSource.length >= 5) {
                        this.checkboxBtn[i].checked = false
                    }

                    else {
                        let uncheckedIndex = GenerateRecomendationsSourceList.recomendationSource.findIndex(e => e.ID === resultsList[i].ID);
                        if (uncheckedIndex > -1) {
                            GenerateRecomendationsSourceList.recomendationSource.splice(uncheckedIndex, 1);
                        }
                        
                        RecomendationsSourceRenderer.renderSourcesList()
                    }
                })
            }
        }
    }
}
