import React, { FC } from 'react'
import styles from './Title.module.scss'

interface ITitle {
	title: string
}

const Title: FC<ITitle> = ({ title }) => {
	return <h3 className={styles.title}>{title}</h3>
}

export default Title
