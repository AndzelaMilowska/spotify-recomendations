import { RecommendationSourceListGenerator } from "./recomentadionsSource";
import { REMOVE_ELEMENT_BUTTON_SELECTOR } from "../dataStorage"
import { ADD_ELEMENT_CHCECKBOX_SELECTOR } from "../dataStorage"
import { TRACK_URL_ATTRIBUTE } from "../dataStorage"

export class RemoveButton {
    static lookForBtnUse() {
        let removeBtn = document.querySelectorAll(REMOVE_ELEMENT_BUTTON_SELECTOR)
        for (let i = 0; i < removeBtn.length; i++) {
            removeBtn[i].addEventListener('click', () => {
                const removeBtnParent = removeBtn[i].parentElement.parentElement
                removeBtnParent.className += ' removeTransformation';
                let uncheckedIndex = RecommendationSourceListGenerator.recomendationSource.findIndex(e => e.trackURL === removeBtnParent.getAttribute(TRACK_URL_ATTRIBUTE));
                RecommendationSourceListGenerator.recomendationSource.splice(uncheckedIndex, 1);
                let checkboxBtn = document.querySelectorAll(ADD_ELEMENT_CHCECKBOX_SELECTOR)
                for (let i = 0; i < checkboxBtn.length; i++) {
                    if (checkboxBtn[i].parentElement.parentElement.parentElement.getAttribute(TRACK_URL_ATTRIBUTE) === removeBtnParent.getAttribute(TRACK_URL_ATTRIBUTE)) {
                        checkboxBtn[i].checked = false
                    }
                }
            })
        }
    }
}
