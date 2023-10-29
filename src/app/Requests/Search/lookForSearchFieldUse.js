import { Throttle } from "../../throttle";
import { SearchRequest } from "./searchRequest";
import { GenerateSearchResultsList } from "./generateSearchResultsList";
import { AddElementCheckbox } from "../../RecommendationsList/lookForAddElChboxUse";
export class SearchbarInputValue {
    static async reactOnSearchbarUse() {
        const searchResultsList = document.querySelector(".search-results-list")
        searchResultsList.innerHTML = ''
        let searchRequest = await SearchRequest.runSearchRequest()
        let searchResObj = GenerateSearchResultsList.generateListObj(searchRequest)
        searchResultsList.innerHTML = GenerateSearchResultsList.generateListHTML(searchResObj)
        GenerateSearchResultsList.setCheckboxesState(searchResObj)
        AddElementCheckbox.lookForCheckboxUse(searchResObj)
    }

    static async lookForSearchbarUse() {
        const searchbarInput = document.querySelector(".searchbar__input")
        searchbarInput.addEventListener('input', () => {
            Throttle.throttle(this.reactOnSearchbarUse, 1000)
        })
    }
}
