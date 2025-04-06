import Link from 'next/link'

export const LinkBase = ({ lng, href = '', children }) => {
  return <Link href={`/${lng}/${href}`}>{children}</Link>
}
