export class ModalListener {
    static lookForUse(modalBgClass, listenerBtnTarget) {
        let modalBg = document.querySelector(modalBgClass)
        let listenerTarget = document.querySelector(listenerBtnTarget)
        listenerTarget.addEventListener(`click`, () => {
            modalBg.style.display = `flex`
            document.addEventListener("click", (evt) => {
                let clidkedEl = evt.target; // clicked element  
                if (clidkedEl == modalBg) {
                    modalBg.style.display = `none`
                }
            });
        })
    }
}
