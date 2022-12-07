'use client'

import { FooterBase } from './FooterBase'
import { useTranslation } from '../../../i18n/client'

export const Footer = ({ lng, path }) => {
  const { t } = useTranslation(lng, 'footer')
  return <FooterBase t={t} lng={lng} path={path} />
}
