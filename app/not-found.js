import Link from 'next/link'
import { detectLanguage, useTranslation } from './i18n'

export default async function NotFound() {
  const lng = detectLanguage()
  const { t } = await useTranslation(lng)

  return (
    <div>
      <h2>Not Found: {lng} - {t('h1')}</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
