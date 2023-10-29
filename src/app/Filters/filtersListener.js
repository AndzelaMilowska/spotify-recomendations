import { RecomendationsURLGenerator } from "../GetRecomendations/getRecmdURLgenerator"
export class FiltersListener {
    static booleanFilterListener() {
        let booleanFilters = document.querySelectorAll('.boolean_filter')
        for (let i = 0; i < booleanFilters.length; i++) {
            booleanFilters[i].addEventListener('change', () => {
                let seedType = booleanFilters[i].getAttribute('name')
                if (booleanFilters[i].checked) {
                    RecomendationsURLGenerator.recomendationsFiltersObj[seedType] = true;
                }
                else {
                    RecomendationsURLGenerator.recomendationsFiltersObj[seedType] = false;
                }
            })
        }
    }

    static rangeFiltersListener() {
        let rangeFilters = document.querySelectorAll('.range-filter__input')
        for (let i = 0; i < rangeFilters.length; i++) {
            rangeFilters[i].addEventListener('change', () => {
                let name = rangeFilters[i].getAttribute('name').replace(' ', '_')
                RecomendationsURLGenerator.recomendationsFiltersObj.advancedFilters[name] = rangeFilters[i].value
                console.log(RecomendationsURLGenerator.recomendationsFiltersObj)
                console.log(Object.entries(RecomendationsURLGenerator.recomendationsFiltersObj.advancedFilters));

            })
        }
    }

    static removeAllFilters() {
        let rangeFilters = document.querySelectorAll('.range-filter__input')
        let booleanFilters = document.querySelectorAll('.boolean_filter')
        let removeFiltersBtn = document.querySelector('#remove-filter')
        removeFiltersBtn.addEventListener('click', () => {
            RecomendationsURLGenerator.recomendationsFiltersObj = {
                seedGenres: [],
                seedArtists: false,
                seedTracks: false,
                advancedFilters: {}
            }
            rangeFilters.forEach((element) => element.value = element.getAttribute('min'));
            booleanFilters.forEach((element) => element.checked = false);
        })
    }

    static filtersListenersActivator() {
        this.booleanFilterListener()
        this.removeAllFilters()
        this.rangeFiltersListener()
    }
}