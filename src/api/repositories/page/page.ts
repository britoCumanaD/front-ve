import { clientBase } from '@/api/client'

const getApiPageInfo = (slug: String) =>
  clientBase(`api/v1/page-info?slug=${slug}`, 'Get')

export { getApiPageInfo }
