// import { useTranslation } from '../../../i18n'
import { getT } from '../../../i18n/server'
import { FooterBase } from './FooterBase'

export const Footer = async ({ lng, path }) => {
  const { t } = await getT(lng, 'footer')
  return <FooterBase t={t} lng={lng} path={path} />
}
