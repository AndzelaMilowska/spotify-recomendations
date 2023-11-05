import { RecomendationsURLGenerator } from "../GetRecomendations/getRecmdURLgenerator"
import { BOOLEAN_FILTERS_SELECTOR } from "../dataStorage"
import { RANGE_FILTER_INPUT_SELECTOR } from "../dataStorage"
import { REMOVE_FILTER_SELECTOR } from "../dataStorage"

export class FiltersListener {
    static booleanFilterListener() {
        let booleanFilters = document.querySelectorAll(BOOLEAN_FILTERS_SELECTOR)
        for (let i = 0; i < booleanFilters.length; i++) {
            booleanFilters[i].addEventListener('change', () => {
                let seedType = booleanFilters[i].getAttribute('name')
                RecomendationsURLGenerator.recomendationsFiltersObj[seedType] = !!booleanFilters[i].checked
            })
        }
    }

    static rangeFiltersListener() {
        let rangeFilters = document.querySelectorAll(RANGE_FILTER_INPUT_SELECTOR)
        for (let i = 0; i < rangeFilters.length; i++) {
            rangeFilters[i].addEventListener('change', () => {
                let name = rangeFilters[i].getAttribute('name').replace(' ', '_')
                RecomendationsURLGenerator.recomendationsFiltersObj.advancedFilters[name] = rangeFilters[i].value
            })
        }
    }

    static removeAllFilters() {
        let rangeFilters = document.querySelectorAll(RANGE_FILTER_INPUT_SELECTOR)
        let booleanFilters = document.querySelectorAll(BOOLEAN_FILTERS_SELECTOR)
        let removeFiltersBtn = document.querySelector(REMOVE_FILTER_SELECTOR)
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