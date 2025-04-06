import { getT } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ path }) => {
  const { t, i18n } = await getT('footer')
  return <FooterBase t={t} lng={i18n.resolvedLanguage} path={path} />
}
