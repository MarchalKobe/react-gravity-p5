import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/gravity-test1">Gravity test 1</Link>
        </li>
        <li>
          <Link href="/gravity-test2">Gravity test 2</Link>
        </li>
        <li>
          <Link href="/buttons">Buttons</Link>
        </li>
        <li>
          <Link href="/buttons-minified">Buttons minified</Link>
        </li>
        <li>
          <Link href="/buttons-minified2">Buttons minified 2</Link>
        </li>
        <li>
          <Link href="/coins">Coins</Link>
        </li>
      </ul>
    </div>
  );
}
