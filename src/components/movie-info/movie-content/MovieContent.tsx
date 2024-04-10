import React, { FC } from 'react'
import styles from './MovieContent.module.scss'
import MovieRating from './movie-rating/MovieRating'
import MovieDetails from './movie-details/MovieDetails'
import { IFilm } from '../../../types/film.interface'

interface IMovieContent {
	item: IFilm
	type: string
}

const MovieContent: FC<IMovieContent> = ({ item, type }) => {
	return (
		<div className={styles.content}>
			<div className={styles.image}>
				<img src={item.poster} alt={item.slug} />
			</div>
			<MovieRating item={item} type={type} />
			<MovieDetails item={item} />
		</div>
	)
}

export default MovieContent
