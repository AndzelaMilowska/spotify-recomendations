import { GenerateRecomendationsSourceList } from "./recomentadionsSource";
export class RemoveButton {
    static lookForBtnUse() {
        let removeBtn = document.querySelectorAll(".removeElement-button")
        for (let i = 0; i < removeBtn.length; i++) {
            removeBtn[i].addEventListener('click', () => {
                const removeBtnParent = removeBtn[i].parentElement.parentElement
                removeBtnParent.className += ' removeTransformation';
                let uncheckedIndex = GenerateRecomendationsSourceList.recomendationSource.findIndex(e => e.trackURL === removeBtnParent.getAttribute('trackURL'));
                GenerateRecomendationsSourceList.recomendationSource.splice(uncheckedIndex, 1);
                let checkboxBtn = document.querySelectorAll(".addElement-checkbox")
                for (let i = 0; i < checkboxBtn.length; i++) {
                    if (checkboxBtn[i].parentElement.parentElement.parentElement.getAttribute('trackURL') === removeBtnParent.getAttribute('trackURL')) {
                        checkboxBtn[i].checked = false
                    }
                }
            })
        }
    }
}
