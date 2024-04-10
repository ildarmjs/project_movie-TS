import React, { FC } from 'react'
import styles from './Actor.module.scss'
import { IActor } from '../../../types/film.interface'

interface IActorProps {
	item: IActor
}

const Actor: FC<IActorProps> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.actor}>
				<img src={item.photo} alt={item.name} />
			</div>
			<div className={styles.name}>{item.name}</div>
		</div>
	)
}

export default Actor
