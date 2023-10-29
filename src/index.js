import './styles/main.scss'
import './styles/variables-static.scss'
import './styles/body.scss'
import { CustomHTMLElementBuilder } from './app/WebComponents/webComponentBuilder'
import { IconHTMLElement } from './app/WebComponents/webComponentIcons'
import { CheckboxComponent } from './app/WebComponents/webComponentCheckbox'
import { RemoveButtonComponent } from './app/WebComponents/webComponentRemoveButton'
import { SearchResult } from './app/WebComponents/webComponentSearchResult'
import { FilterRange } from './app/WebComponents/webComponentFilterRange'
import { AccesToken } from './app/Requests/Authorization/AccesToken' 
import { SearchbarInputValue } from './app/Requests/Search/lookForSearchFieldUse'
import { GetRecomendationsBtn } from './app/GetRecomendations/getRecomendationsBtn'
import { GenresFilter } from './app/Filters/genresFiltersGenerator'
import { ModalListener } from './app/modalUseListener'
import { FiltersListener } from './app/Filters/filtersListener'




CustomHTMLElementBuilder.createCustomElement(IconHTMLElement.elementTagName, IconHTMLElement);
CustomHTMLElementBuilder.createCustomElement(CheckboxComponent.elementTagName, CheckboxComponent);
CustomHTMLElementBuilder.createCustomElement(RemoveButtonComponent.elementTagName, RemoveButtonComponent);
CustomHTMLElementBuilder.createCustomElement(SearchResult.elementTagName, SearchResult);
CustomHTMLElementBuilder.createCustomElement(FilterRange.elementTagName, FilterRange);

await  AccesToken.getAccesToken()
await SearchbarInputValue.lookForSearchbarUse()
GenresFilter.generateHTML()
GetRecomendationsBtn.getRecomendations()
ModalListener.lookForUse('.genres-list__background', '.genres-filter')
ModalListener.lookForUse('.advanced-filters-list__background', '.advanced-filter')
FiltersListener.filtersListenersActivator()



