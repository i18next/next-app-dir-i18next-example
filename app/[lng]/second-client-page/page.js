'use client'

import Link from 'next/link'
import { languages } from '../../i18n/settings'
import { useTranslation } from '../../i18n/client'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/client'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'second-client-page')
  return (
    <>
      <main>
        <Header
          heading={t('h1')}
          title={t('title')}
        />
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer lng={lng}/>
    </>
  );
}