import { default as CenteredMessage } from 'next/error';

export default function Home() {
  return (
    <CenteredMessage statusCode={801} title="It works! Now make it shine." />
  );
}
