import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.css'

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
      </main>
    </div>
  )
}
