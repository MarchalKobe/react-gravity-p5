import Head from 'next/head';

import { BitsOfLoveHeart } from '~/shared/ui/bits-of-love-heart';

const siteUnavailable = process.env.NEXT_PUBLIC_SITE_UNAVAILABLE as string;
const defaultMessage = 'This site is currently under construction';
const message = /^(1|true)$/.test(siteUnavailable)
  ? defaultMessage
  : siteUnavailable;

export default function Error503Page() {
  return (
    <>
      <Head>
        <title>
          {`Unavailable | ${
            typeof window !== 'undefined' && window.location?.host
          }`}
        </title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="flex flex-col justify-center min-h-screen bg-[#fff]">
        <main className="max-w-7xl m-auto px-8">
          <p className="border border-[#ddd] p-8 flex flex-col rounded-sm">
            <span className="font-bold mb-6 text-lg text-[#000]">
              Unavailable
            </span>
            <span className="text-[#555]">{message || defaultMessage}</span>
          </p>
        </main>
        <footer className="min-h-[100px] border-t border-[#ddd] flex items-center justify-center">
          <a
            href="https://www.bitsoflove.be/"
            rel="noopener noreferrer"
            className="group text-sm"
            target="_blank"
          >
            <span>Created by </span>
            <BitsOfLoveHeart colorClassName="bg-current group-hover:bg-[#f0f]" />
            <span>Bits of Love</span>
          </a>
        </footer>
      </div>
    </>
  );
}
