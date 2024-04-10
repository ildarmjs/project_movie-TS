import React, { FC } from 'react'
import styles from './MovieItemDetail.module.scss'
import Genre from '../../../../ui/genre/Genre'
import { IFilm, IGenre } from '../../../../../types/film.interface'

interface IMovieContent {
	item: any
	title: string
}

const MovieItemDetail: FC<IMovieContent> = ({ item, title }) => {
	return (
		<div className={styles.item}>
			<div className={styles.itemTitle}>{title}</div>
			{title === 'Genres' ? (
				item.map((genre: IGenre) => <Genre genre={genre} key={genre.id} />)
			) : (
				<div className={styles.itemText}>{item}</div>
			)}
		</div>
	)
}

export default MovieItemDetail
