import { use } from 'react'
import Link from 'next/link'
import i18n, { languages } from '../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function Page({ params }) {
  if (languages.indexOf(params.lng) < 0) params.lng = 'en'
  const i18next = use(i18n(params.lng))
  return (
    <>
      <ul>
        <li>
          <Link href={`/${params.lng}/test`}>
            {i18next.t('goToPage1')}
          </Link>
        </li>
        <li>
          <Link href={`/${params.lng}/testSecond`}>
          {i18next.t('goToPage2')}
          </Link>
        </li>
      </ul>
      <hr />
      {languages.filter((lng) => params.lng !== lng).map((lng, index) => {
        return (
          <>
            {index > 0 && (' | ')}
            <Link href={`/${lng}`}>
              {lng}
            </Link>
          </>
        )
      })}
    </>
  );
}
