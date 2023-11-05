export const RANGE_FILTER_INPUT_SELECTOR = '.range-filter__input'
export const BOOLEAN_FILTERS_SELECTOR = '.boolean_filter'
export const REMOVE_FILTER_SELECTOR = '#remove-filter'
export const GENRE_LIST_SELECTOR = '.genres-list'
export const GENRE_FILTERS_BUTTONS_SELECTOR = '.genre-filter-button'
export const GET_RECOMENDATIONS_BUTTON = `.get-recomendationsButton`
export const RECOMENDATIONS_SOURCES_SELECTOR = `.recomendations-sourcesList`
export const RECOMENDATIONS_LIST_BACKGROUND_SELECTOR = `.recomendations-list__background`
export const RECOMENDATIONS_LIST_SELECTOR = `.recomendations-list`
export const ADD_ELEMENT_CHCECKBOX_SELECTOR = `.addElement-checkbox`
export const REMOVE_ELEMENT_BUTTON_SELECTOR = `.removeElement-button`

export const REMOVE_BUTTON_WEB_COMPONENT_TAG_NAME = `removebtn-component`

export const TRACK_URL_ATTRIBUTE = 'trackURL'

export const RECOMENDATIONS_URL_BASE = `https://api.spotify.com/v1/recommendations?`
export const RECOMENDATIONS_HEADER_LAYOUT = `<h2>Recommendations list:</h2> <button class="recomendations-list__button" id="createPlaylist_button">Create playlist</button>`
export const GENRES_SECTION_HEADER_LAYOUT = `<h2>Available genres:</h2>`
export function genreFilterInputLayout(genreName) {
    return `
    <label for="genre-filter__${genreName}" class="recomendations-filters__button-label" >
        <input name ="${genreName}" id="genre-filter__${genreName}" type="checkbox" class="recomendations-filters__button genre-filter-button"/>${genreName}
    </label>`
}

export function searchResultLayout(object) {
    return ` 
<search-result class="search-result" 
buttonComponentName = "checkbox-component"
coverImage="${object.coverImage}"
trackName="${object.trackName}" 
trackURL="${object.trackURL}"
artistName="${object.artists[0].name}"
artistURL="${object.artists[0].url}"
albumName="${object.albumName}"
albumURL="${object.albumURL}"
trackTime="${object.duration}"
></search-result>`}

export const SEARCH_RESULT_TRACKS_AMOUNT = 10;