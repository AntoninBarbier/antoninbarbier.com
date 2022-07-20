import React, { FunctionComponent, useContext } from 'react'
import styles from './styles.module.scss'
import { event } from '../../lib/ga'
import { MouseContext, MouseContextType } from 'context/mouse-context'

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
	const { cursorType, cursorChangeHandler } = useContext(
		MouseContext
	) as MouseContextType
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{socials.map((social) => (
					<li key={social.name} className={styles.social}>
						<a
							href={social.url}
							target='_blank'
							rel='noreferrer'
							onClick={() => {
								event({
									action: `social_link`,
									params: {
										social_link_name: social.name,
									},
								})
							}}
							onMouseEnter={() => cursorChangeHandler('hovered')}
							onMouseLeave={() => cursorChangeHandler('')}
						>
							<img
								src={social.logo}
								title={social.name}
								alt={social.name}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Socials
