import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'
import Link from 'next/link'

export default function FooBar() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boo!</title>
        <meta name="description" content="boo .*" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Boo!
        </h1>
        <ul>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/foo-bar">
                <a>Foo Bar</a>
                </Link>
            </li>
            <li>
                <Link href="/not-a-real-page">
                <a>Not a real page</a>
                </Link>
            </li>
        </ul>

      </main>
    </div>
  )
}
