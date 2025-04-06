'use client'

import { LinkBase } from './LinkBase'
import { useT } from '../../../i18n/client'

export const Link = ({ href, children }) => {
  const { i18n } = useT()
  return <LinkBase lng={i18n.resolvedLanguage} href={href}>{children}</LinkBase>
}
