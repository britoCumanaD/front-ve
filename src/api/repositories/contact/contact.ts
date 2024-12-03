import { clientBase } from '@/api/client'

const sendMail = (slug: String) =>
  clientBase(`api/v1/page-info?slug=${slug}`, 'Get')

export { sendMail }
