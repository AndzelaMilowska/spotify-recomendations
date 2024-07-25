import { UserDataHttpService } from "../getCurrentUser"
import { CreatePlaylistRequests } from "./createPlaylistRequest"
import { PlaylistPopup } from "./playlistCreatedPopUp"

export class PlaylistCreator {
    static async createPlaylistBtnOn() {
        const createPlaylistBtn = document.querySelector('#createPlaylist_button')
        createPlaylistBtn.addEventListener('click', async () => {
            await UserDataHttpService.getCurrendUserData()
            await CreatePlaylistRequests.createPlaylistRequest()
            CreatePlaylistRequests.generateTracksUriArr()
            await CreatePlaylistRequests.addItemsToPlaylist(CreatePlaylistRequests.newPlaylistData.id, CreatePlaylistRequests.recomendationsUrisData)
            PlaylistPopup.displayPopUp()
            let modalBg = document.querySelector(`.recomendations-list__background`)
            modalBg.style.display = `none`
            PlaylistPopup.goToPlaylist(CreatePlaylistRequests.newPlaylistData.external_urls.spotify)
        })
    }
}