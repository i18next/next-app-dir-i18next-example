import { dir } from 'i18next'
import { detectLanguage } from './i18n'

export default function RootLayout({ children }) {
  const lng = detectLanguage()
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
