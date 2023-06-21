'use client';

import Search from '@/components/utility/search/Search';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  let locale = 'en';

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/Google.png"
        alt="Google logo"
        width={272}
        height="92"
        priority
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link
          href="/"
          locale={locale === 'en' ? 'fr' : 'en'}
          className="underline text-blue-600"
        >
          Français
        </Link>
      </p>
    </section>
  );
}
