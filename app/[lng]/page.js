import { Trans } from 'react-i18next/TransWithoutContext'
import { getT } from '../i18n'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Link } from './components/Link'

export default async function Page() {
  const { t } = await getT()

  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t('blog.link')}>blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')}>
            <img
              style={{ width: '50%' }}
              src="https://cdn.prod.website-files.com/67a323e323a50df7f24f0a94/67ab23a11128dcf4b9533ed0_next-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href="/second-page">
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href="/client-page">
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
