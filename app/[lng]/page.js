import { use } from 'react'
import Link from 'next/link'
import i18next, { languages } from '../i18n'
import { Trans } from 'react-i18next/TransWithoutContext'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function Page({ params }) {
  let { lng } = params;
  if (languages.indexOf(lng) < 0) lng = 'en'
  const { t, i18n } = use(i18next(lng))
  return (
    <>
      <ul>
        <li>
          <Link href={`/${lng}/test`}>
            {t('goToPage1')}
          </Link>
        </li>
        <li>
          <Link href={`/${lng}/testSecond`}>
            {t('goToPage2')}
          </Link>
        </li>
      </ul>
      <hr />
      <Trans i18nKey="languageSwitcher" i18n={i18n}>
        Switch from <strong>{{lng}}</strong> to:{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </>
  );
}
