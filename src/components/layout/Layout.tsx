import React, { FC } from 'react'
import styles from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

interface ILayoutProps {
	children: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.children}>{children}</div>
			<Footer />
		</div>
	)
}

export default Layout
