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
      </ul>
    </div>
  );
}
