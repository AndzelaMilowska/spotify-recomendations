import { Throttle } from "../../throttle";
import { SearchHttpService } from "./searchRequest";
import { GenerateSearchResultsList } from "./generateSearchResultsList";
import { AddElementCheckbox } from "../../RecommendationsList/lookForAddElChboxUse";
import { SEARCH_RESULTS_LIST_SELECTOR } from "../../dataStorage";
import { SEARCHBAR_INPUT_SELECTOR } from "../../dataStorage";
export class SearchbarInputValue {
    static async reactOnSearchbarUse() {
        const searchResultsList = document.querySelector(SEARCH_RESULTS_LIST_SELECTOR)
        searchResultsList.innerHTML = ''
        let searchRequest = await SearchHttpService.runSearchRequest()
        let searchResObj = GenerateSearchResultsList.generateListObj(searchRequest)
        searchResultsList.innerHTML = GenerateSearchResultsList.generateListHTML(searchResObj)
        GenerateSearchResultsList.setCheckboxesState(searchResObj)
        AddElementCheckbox.lookForCheckboxUse(searchResObj)
    }

    static async lookForSearchbarUse() {
        const searchbarInput = document.querySelector(SEARCHBAR_INPUT_SELECTOR)
        searchbarInput.addEventListener('input', () => {
            Throttle.throttle(this.reactOnSearchbarUse, 1000)
        })
    }
}
