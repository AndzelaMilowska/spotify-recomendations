import { GetGenres } from "../Requests/getGenresRequest"
import { RecomendationsURLGenerator } from "../GetRecomendations/getRecmdURLgenerator"
export class GenresFilter {
    static genresList = document.querySelector('.genres-list')
    static async generateHTML() {
        let genresList = document.querySelector('.genres-list')
        let genresArray = await GetGenres.getGenresRequest()
        let htmlLayout = genresArray.genres.map(genre => `
        <label for="genre-filter__${genre}" class="recomendations-filters__button-label" >
            <input name ="${genre}" id="genre-filter__${genre}" type="checkbox" class="recomendations-filters__button genre-filter-button"/>${genre}
        </label>` )
        genresList.innerHTML = `<h2>Available genres:</h2>` + htmlLayout.join('')
        this.genresListener()
    }

    static genresListener() {
        let genresCheckboxes = document.querySelectorAll('.genre-filter-button')
        if (genresCheckboxes != undefined) {
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
}

