import React, { FunctionComponent, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Socials from '../components/Socials'
import styles from './index.module.scss'
import Title from 'components/Title'
import StarsBackground from 'components/StarsBackground'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <StarsBackground />
        <section className={styles.heading}>
          <Title title="Bonjour, je m'appelle Antonin Barbier." subtitle='Je suis développeur front-end.' />
        </section>
      </main>
      <Socials />
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
