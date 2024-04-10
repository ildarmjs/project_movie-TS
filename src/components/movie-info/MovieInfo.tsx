import React, { FC, useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import styles from './MovieInfo.module.scss'
import Container from '../ui/container/Container'
import { MoviesService } from '../../services/movies.service'
import MovieContent from './movie-content/MovieContent'
import MoviePlayer from './movie-player/MoviePlayer'
import Title from '../ui/title/Title'
import Card from '../ui/card/Card'
import Actor from '../ui/actor/Actor'
import InfoSubscribe from '../home/info-subscribe/InfoSubscribe'
import { useGetMovieByIdQuery } from '../../redux/api/movieApi'
import CarouselCustom from '../ui/carousel-custom/CarouselCustom'
import { IActor, IFilm } from '../../types/film.interface'

interface IMovieInfoProps {
	movieId: any
	category: string
	type: string
}

const MovieInfo: FC<IMovieInfoProps> = ({ movieId, category, type }) => {
	const [item, setItem] = useState<IFilm>()
	const [similars, setSimilars] = useState([])
	const [loading, setLoading] = useState(false)

	// const slug = item?.genres.map(genre => genre.slug).join(' ')

	useEffect(() => {
		async function getMovieById() {
			setLoading(true)
			const { data } = await MoviesService.getOneMovie(movieId, category)
			setItem(data)
			setLoading(false)
		}
		getMovieById()
	}, [movieId])

	useEffect(() => {
		async function getSlugMovie() {
			// setLoading(true)
			const { data } = await MoviesService.getMovieSimilar('drama', category)
			setSimilars(data)
		}
		getSlugMovie()
	}, [])
	// console.log(item.genres[0])

	if (item)
		return (
			<Layout>
				{loading ? (
					<div>Загрузка</div>
				) : (
					<div
						className={styles.movie}
						style={{
							// backgroundPosition: 'center',
							// backgroundSize: 'auto auto',
							backgroundRepeat: 'no-repeat',
							backgroundImage: `url(${item.bigPoster})`
						}}
					>
						<div className={styles.shadow} />
						<Container>
							<div className={styles.body}>
								<h3 className={styles.title}>{item.title}</h3>
								<div className={styles.row}>
									<MovieContent item={item} key={item.id} type={type} />
									<MoviePlayer item={item} />
								</div>
								<div className={styles.actors}>
									<Title title='Actors' />
									<div className={styles.actorsBody}>
										{item.actors.map((actor: IActor) => (
											<Actor item={actor} key={actor.id} />
										))}
									</div>
								</div>
								<div className={styles.similar}>
									<h3 className={styles.title}>Similar {type}</h3>
									<div className={styles.similarItems}>
										{similars.slice(0, 3).map((similar: IFilm) => (
											<Card
												item={similar}
												type={type}
												key={similar.id}
												isLoading={false}
											/>
										))}
									</div>
								</div>
							</div>
						</Container>
						<InfoSubscribe classStyle={styles.infoSubscribe} />
					</div>
				)}
			</Layout>
		)
}

export default MovieInfo
