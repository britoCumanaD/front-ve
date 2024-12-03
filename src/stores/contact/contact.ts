import { defineStore } from 'pinia'
//import { sendMail } from '@/api/repositories/contact/contact'

interface ContactState {
  _loading: Boolean
  _error: Object | null
  _showModal: Boolean
}

export const useContactStore = defineStore('contact', {
  state: (): ContactState => ({
    _loading: false,
    _error: null,
    _showModal: false,
  }),
  getters: {
    loading: (state): Boolean => state._loading,
    error: (state): Object | null => state._error,
    showModal: (state): Boolean => state._showModal, 
  },
  actions: {
    async handleMail() {
      this._loading = true
      /*const { data, error } = await getApiPageInfo(name)
      if (error)  this._error = Object.assign({}, error)
      if (data) this._pageData = data*/
      this._loading = false
    },
    handleShowModal(show: Boolean):void {
        this._showModal = show
    }
  },
})
