import React, { FC } from 'react'
import styles from './Menu.module.scss'
import Logo from '../logo/Logo'
import Navigation from '../navigation/Navigation'
import Actions from '../actions/Actions'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<div className={styles.menuLeft}>
				<Logo />
				<Navigation />
			</div>
			<div className={styles.menuRight}>
				<Actions />
			</div>
		</div>
	)
}

export default Menu
