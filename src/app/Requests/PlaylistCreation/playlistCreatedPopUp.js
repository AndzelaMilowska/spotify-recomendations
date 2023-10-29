export class PlaylistPopup {
    static playlistInfo = document.querySelector('.newPlaylist-info')

    static displayPopUp() {
        PlaylistPopup.playlistInfo.style.display = `flex`
    }

    static hidePopup() {
        PlaylistPopup.playlistInfo.style.display = `none`
    }

    static goToPlaylist(url) {
        let button = document.querySelector('.goToPlaylist__button')
        button.addEventListener('click', function openTab() {
            window.open(url, "_blank");
            PlaylistPopup.hidePopup()
            })
            
    }
}