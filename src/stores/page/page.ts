import { defineStore } from 'pinia'
import { getApiPageInfo } from '@/api/repositories/page/page'
import { PageState, PageData } from '@/types/pages';

export const usePageStore = defineStore('page', {
  state: (): PageState => ({
    _loading: false,
    _error: null,
    _pageData: {} as PageData,
  }),
  getters: {
    loading: (state): boolean => state._loading,
    error: (state): Object | null => state._error,
    pageData: (state): PageData => state._pageData, 
  },
  actions: {
    async getPageInfo(name: String) {
      this._loading = true
      const { data, error } = await getApiPageInfo(name)
      if (error)  this._error = Object.assign({}, error)
      if (data) this._pageData = data
      this._loading = false
    },
  },
})
