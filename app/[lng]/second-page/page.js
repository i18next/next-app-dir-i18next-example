import { getT } from '../../i18n'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from '../components/Link'

export async function generateMetadata() {
  const { t } = await getT('second-page')
  return { title: t('h1') }
}

export default async function Page() {
  const { t } = await getT('second-page')
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href="/">
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer path="/second-page" />
    </>
  )
}