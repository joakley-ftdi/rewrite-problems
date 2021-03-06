import Head from 'next/head'
import styles from './index.module.css'
import Link from 'next/link'

export default function FooBar() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foo Bar</title>
        <meta name="description" content="foo bar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Foo Bar!
        </h1>
        <ul>
            <li>
                <Link href="/boo/far">
                <a>Boo Far (breaks when catch all rewrite exists)</a>
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
