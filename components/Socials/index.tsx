import React, { FunctionComponent } from 'react'
import styles from './styles.module.scss'

const socials = [
  {
    name: 'LinkedIn',
    logo: '/social-icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/antonin-barbier/',
  },
  {
    name: 'Malt',
    logo: '/social-icons/malt.svg',
    url: 'https://www.malt.fr/profile/antoninbarbier',
  },
  {
    name: 'GitHub',
    logo: '/social-icons/github.svg',
    url: 'https://github.com/AntoninBarbier/',
  },
  {
    name: 'Instagram',
    logo: '/social-icons/instagram.svg',
    url: 'https://www.instagram.com/anto_brb/',
  },
]

const Socials: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {socials.map((social) => (
          <li key={social.name} className={styles.social}>
            <a href={social.url} target='_blank'>
              <img src={social.logo} title={social.name} alt={social.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
