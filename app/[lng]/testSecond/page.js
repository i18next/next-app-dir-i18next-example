import i18n, { languages } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function Page({ params }) {
  const i18next = await i18n(params.lng)
  return (
    <>
      <h1>{i18next.t('welcome2')}</h1>
    </>
  );
}