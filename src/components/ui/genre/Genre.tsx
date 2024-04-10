import React, { FC } from 'react'
import styles from './Genre.module.scss'
import { IGenre } from '../../../types/film.interface'

interface IGenreProps {
	genre: IGenre
}

const Genre: FC<IGenreProps> = ({ genre }) => {
	return (
		<div className={styles.itemText}>
			<span>{genre.name}</span>
		</div>
	)
}

export default Genre
