import { defineStore } from 'pinia'
import getOauthRequestMethod from '@/api/repositories/oauth/oauthToken'
import { GRANT_TYPE, CLIENT_ID, CLIENT_SECRET } from '@/config/config'

interface OauthTokenState {
  _loading: boolean
  _error: Object | null
  _oauthToken: String | null,
}

export const useOauthTokenStore = defineStore('oauthToken', {
  state: (): OauthTokenState => ({
    _loading: false,
    _error: null,
    _oauthToken: null,
  }),
  getters: {
    loading: (state): boolean => state._loading,
    error: (state): Object | null => state._error,
    oauthToken: (state): String | null => state._oauthToken, 
  },
  actions: {

    getStoredToken(): { token: string; expiresAt: number } | null {
      const storedTokenData = localStorage.getItem('oauthTokenData');
      if (storedTokenData) {
        return JSON.parse(storedTokenData);
      }
      return null;
    },
    
    isTokenValid(tokenData: { token: string; expiresAt: number }): boolean {
      const now = new Date().getTime();
      return tokenData.expiresAt > now;
    },

    clearStoredToken(): void {
      localStorage.removeItem('oauthTokenData');
    },

    async fetchNewToken(): Promise<{ token: string; error: any }> {
      const { data, status, error } = await getOauthRequestMethod({
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      });
    
      if (status === 200 && data) {
        return { token: data.access_token, error: null };
      }
    
      return { token: '', error };
    },

    saveToken(token: string, expiresIn: number): void {
      const now = new Date().getTime()
      const expiresAt = now + expiresIn * 1000
      const tokenData = { token, expiresAt }
      localStorage.setItem('oauthTokenData', JSON.stringify(tokenData))
    },
    
    async getOauthToken() {
      this._loading = true;
    
      const storedTokenData = this.getStoredToken();
    
      if (storedTokenData && this.isTokenValid(storedTokenData)) {
        this._oauthToken = storedTokenData.token;
        this._loading = false;
        return;
      }
    
      if (storedTokenData) this.clearStoredToken()
    
      const { token, error } = await this.fetchNewToken()
    
      if (token) {
        this.saveToken(token, 3600)
        this._oauthToken = token
      }
    
      if (error) this._error = Object.assign({}, error)
    
      this._loading = false;
    }
  },
})
