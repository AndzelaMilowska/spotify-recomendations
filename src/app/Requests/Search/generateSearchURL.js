import { searchParameters } from "./searchParameters"

export class SearchURL {
    static generateSearchURL() {
        return `${searchParameters.baseURL}search?q=${encodeURI(searchParameters.searchbarInput.value)}&type=${searchParameters.searchType}&limit=${searchParameters.searchLimit}`
    }
}