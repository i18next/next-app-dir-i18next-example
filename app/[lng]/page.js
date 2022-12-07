import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import i18next from '../i18n'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function Page({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t, i18n } = await i18next(lng)

  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <h2>
          <Trans t={t} i18nKey="welcome">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        {/* <div style={{ display: 'inline-flex', width: '90%' }}>
          <div style={{ width: '50%' }}>
            <h3 style={{ minHeight: 70 }}>
              {t('blog.optimized.question')}
            </h3>
            <p>
              <Trans i18n={i18n} i18nKey="blog.optimized.answer">
                Then you may have a look at{' '}
                <a href={t('blog.optimized.link')}>this blog post</a>
                .
              </Trans>
            </p>
            <a href={t('blog.optimized.link')}>
              <img
                style={{ width: '50%' }}
                src="https://locize.com/blog/next-i18next/next-i18next.jpg"
              />
            </a>
          </div>
          <div style={{ width: '50%' }}>
            <h3 style={{ minHeight: 70 }}>
              {t('blog.ssg.question')}
            </h3>
            <p>
              <Trans i18n={i18n} i18nKey="blog.ssg.answer">
                Then you may have a look at{' '}
                <a href={t('blog.ssg.link')}>this blog post</a>.
              </Trans>
            </p>
            <a href={t('blog.ssg.link')}>
              <img
                style={{ width: '50%' }}
                src="https://locize.com/blog/next-i18n-static/title.jpg"
              />
            </a>
          </div>
        </div> */}
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href={`/${lng}/second-page`}>
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
      <Footer lng={lng}/>
    </>
  )
}
