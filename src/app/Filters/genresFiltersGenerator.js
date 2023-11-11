import { GenreHttpService } from "../Requests/getGenresRequest"
import { RecomendationsURLGenerator } from "../GetRecomendations/getRecmdURLgenerator"
import { genreFilterInputLayout } from "../dataStorage"
import { GENRE_LIST_SELECTOR } from "../dataStorage"
import { GENRES_SECTION_HEADER_LAYOUT } from "../dataStorage"
import { GENRE_FILTERS_BUTTONS_SELECTOR } from "../dataStorage"

export class GenresFilter {
    static async generateHTML() {
        let genresList = document.querySelector(GENRE_LIST_SELECTOR)
        let genresArray = await GenreHttpService.getGenresRequest()
        if (genresArray == undefined) {
            return
        }
        let htmlLayout = genresArray.genres.map(genre => genreFilterInputLayout(genre))
        genresList.innerHTML = GENRES_SECTION_HEADER_LAYOUT + htmlLayout.join('')
        this.genresListener()
    }

    static genresListener() {
        let genresCheckboxes = document.querySelectorAll(GENRE_FILTERS_BUTTONS_SELECTOR)
        if (genresCheckboxes == undefined) {
            return
        }
        for (let i = 0; i < genresCheckboxes.length; i++) {
            genresCheckboxes[i].addEventListener('change', () => {
                if (genresCheckboxes[i].checked) {
                    RecomendationsURLGenerator.recomendationsFiltersObj.seedGenres.push(genresCheckboxes[i].getAttribute('name'))
                }
                else {
                    let removeIndex = RecomendationsURLGenerator.recomendationsFiltersObj.seedGenres.indexOf(genresCheckboxes[i].getAttribute('name'))
                    RecomendationsURLGenerator.recomendationsFiltersObj.seedGenres.splice(removeIndex, 1);
                }
            })
        }
    }
}
