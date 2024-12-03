import { clientBase } from '@/api/client'

const getOauthRequestMethod = (body: Object) =>
  clientBase(
    'oauth/token',
    'POST',
    {
      ...body,
    }
  )

export default getOauthRequestMethod
