import React, { FC } from 'react'
import styles from './MovieDetails.module.scss'
import MovieItemDetail from './movie-item-detail/MovieItemDetail'
import { IFilm } from '../../../../types/film.interface'

interface IMovieDetails {
	item: IFilm
}

const MovieDetails: FC<IMovieDetails> = ({ item }) => {
	return (
		<div className={styles.details}>
			<div className={styles.items}>
				<MovieItemDetail item={item.year} title='Year' />
				<MovieItemDetail item={item.country} title='Country' />
				<MovieItemDetail item={item.time} title='Time' />
				<MovieItemDetail item={item.genres} title='Genres' />
			</div>
		</div>
	)
}

export default MovieDetails
