import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from 'components/Navbar'
import StarsBackground from 'components/StarsBackground'
import Title from 'components/Title'
import Socials from 'components/Socials'
import styles from './index.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Antonin Barbier | Front-end developer</title>
        <meta
          name='description'
          content='Hi, my name is Antonin Barbier, I am a front-end developer based on Reunion Island. I am specialized in React and Next.js, and I have a thing for creative coding and beautiful designs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <StarsBackground />
        <section className={styles.heading}>
          <Title title='Hi, my name is Antonin Barbier.' subtitle='I am a front-end developer.' />
        </section>
      </main>
      <Socials />
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
