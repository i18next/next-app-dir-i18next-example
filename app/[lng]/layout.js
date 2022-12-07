import { dir } from 'i18next'

export default async function RootLayout({
  children,
  params: {
    lng,
  },
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
