import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <Link href={'/en'}>
        go to lng page
      </Link>
    </div>
  );
}
