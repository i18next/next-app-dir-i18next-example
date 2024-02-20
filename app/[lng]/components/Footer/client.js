'use client'

import { FooterBase } from './FooterBase'
import { useTranslation } from '../../../i18n/client'
// import { useParams } from 'next/navigation'

export const Footer = ({ lng, path }) => {
  const { t } = useTranslation(lng, 'footer')
  return <FooterBase t={t} lng={lng} path={path} />
}

// if you like to avoid prop drilling, you can do so with useParams()
// export const Footer = ({ path }) => {
//   const params = useParams()
//   const { t } = useTranslation(params.lng, 'footer')
//   return <FooterBase t={t} lng={params.lng} path={path} />
// }
