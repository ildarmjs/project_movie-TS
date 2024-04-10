import React, { FC } from 'react'
import styles from './MovieRating.module.scss'
import { IFilm } from '../../../../types/film.interface'

interface IMovieContent {
	item: IFilm
	type: string
}

const MovieRating: FC<IMovieContent> = ({ item, type }) => {
	return (
		<div className={styles.rating}>
			<div className={styles.rate}>{item.rating}</div>
			<div className={styles.content}>
				<div className={styles.subtitle}>Rating from {type}</div>
				<div className={styles.text}>Estimate</div>
			</div>
		</div>
	)
}

export default MovieRating
