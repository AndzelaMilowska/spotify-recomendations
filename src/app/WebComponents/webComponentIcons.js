import { CustomHTMLElement } from './webComponentBase'
import searchIcon from '../../assets/searchbarIcon.svg'
import axeIcon from '../../assets/axeIcon.svg'
import removeIcon from '../../assets/removeIcon.svg'
import addIcon from '../../assets/addIcon.svg'
import doneIcon from '../../assets/doneIcon.svg'

export class IconHTMLElement extends CustomHTMLElement {
    static elementTagName = 'svg-icon';

    connectedCallback() {
        const obj = {
            searchIcon,
            axeIcon,
            addIcon,
            removeIcon,
            doneIcon,
        }
        const name = this.getAttribute('name');
        this.template.innerHTML = obj[name];
        this._shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
}

