import type { AppProps } from 'next/app';

import '~/shared/styles/globals.css';

const siteUnavailable = process.env.NEXT_PUBLIC_SITE_UNAVAILABLE;

function MyApp({ Component, pageProps }: AppProps) {
  // Render the 503 page barebones
  if (siteUnavailable) return <Component {...pageProps} />;

  return <Component {...pageProps} />;
}

export default MyApp;
