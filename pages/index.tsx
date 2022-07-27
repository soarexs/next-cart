import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import { Requests } from '../components/Requests/Requests'

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
