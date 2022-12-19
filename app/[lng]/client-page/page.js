'use client'

import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/client'
import { useState } from 'react'

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng, 'client-page')
  const [counter, setCounter] = useState(0)
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <p>{t('counter', { count: counter })}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
        </div>
        <Link href={`/${lng}/second-client-page`}>
          {t('to-second-client-page')}
        </Link>
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer lng={lng} path="/client-page" />
    </>
  )
}