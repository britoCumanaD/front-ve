import { API_URL } from '@/config/config'
import { useOauthTokenStore } from '@/stores/oauth/token'

interface ClientBaseResponse<T = any> {
  data: T | null
  error: string | null | boolean
  status: number
  response: T | null
}
interface ApiResponse {
  message?: string | boolean;
}

export const clientBase = async <T = any>(
  endpoint: string,
  method: string,
  body: Object = {},

): Promise<ClientBaseResponse<T>> => {

  const { oauthToken } = useOauthTokenStore()
  const bearerToken = oauthToken

  const headers: Record<string, string> = {
    'content-type': 'application/json',
    accept: 'application/json',
  }

  if (bearerToken) headers.Authorization = `Bearer ${bearerToken}`

  const config: RequestInit = {
    method,
    headers,
  }

  if (Object.keys(body).length > 0) config.body = JSON.stringify(body)

  const response = await fetch(`${API_URL}${endpoint}`, config)
  const _data = await response.json()
  const typedData = _data as ApiResponse
  
  if (response.status === 500 && _data && typeof _data === 'object') {
    typedData.message = typedData.message ?? true
  }

  return {
    data: response.ok ? (_data as T) : null,
    error: !response.ok && _data && typeof _data === 'object' && typedData.message ? typedData.message : null,
    status: response.status,
    response: _data as T,
  }
}