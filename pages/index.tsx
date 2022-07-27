import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/Home.module.css'
import { Header } from '../src/components/Header/Header'
import { Requests } from '../src/components/Requests/Requests'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <section>
        <Requests></Requests>
      </section>
    </div>
  )
}

export default Home
