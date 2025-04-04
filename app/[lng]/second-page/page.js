import Link from 'next/link'
// import { useTranslation } from '../../i18n'
import { getT } from '../../i18n/server'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export async function generateMetadata({ params }) {
  const { lng } = await params
  // const { t } = await useTranslation(lng, 'second-page')
  const { t } = await getT(lng, 'second-page')
  return { title: t('h1') }
}

export default async function Page({ params }) {
  const { lng } = await params
  // const { t } = await useTranslation(lng, 'second-page')
  const { t } = await getT(lng, 'second-page')
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer lng={lng} path="/second-page" />
    </>
  )
}