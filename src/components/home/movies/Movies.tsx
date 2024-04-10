import React, { FC } from 'react'
import styles from './Movies.module.scss'
import Title from '../../ui/title/Title'
import { useGetMoviesQuery } from '../../../redux/api/movieApi'
import Card from '../../ui/card/Card'
import CarouselCustom from '../../ui/carousel-custom/CarouselCustom'
import { IFilm } from '../../../types/film.interface'

const Movies: FC = () => {
	const { data, error, isLoading } = useGetMoviesQuery()

	return (
		<div className={styles.movies}>
			<Title title='We recommend movies' />

			{/* <div className={styles.items}> */}
			<CarouselCustom slidesToShow={4} slidesToShowBreakPoints={3}>
				{data?.slice(0, 5).map((item: IFilm) => (
					<Card item={item} key={item.id} isLoading={isLoading} type='movie' />
				))}
			</CarouselCustom>
			{/* </div> */}
		</div>
	)
}

export default Movies
