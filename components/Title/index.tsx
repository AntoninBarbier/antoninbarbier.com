import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss'

interface TitlePropsType {
  title: string
  subtitle: string
}

const Title: FunctionComponent<TitlePropsType> = ({ title, subtitle }) => {
  return (
    <h1 className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </h1>
  )
}

export default Title
