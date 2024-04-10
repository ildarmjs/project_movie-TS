import React, { FC, useContext } from 'react'
import styles from './MoviePlayer.module.scss'
import ReactPlayer from 'react-player'
import { AuthContext } from '../../../utils/AuthContext'
import Button from '../../ui/button/Button'
import { IFilm } from '../../../types/film.interface'

interface IMoviePlayer {
	item: IFilm
}

const MoviePlayer: FC<IMoviePlayer> = ({ item }) => {
	const { user } = useContext<any>(AuthContext)
	return (
		<div className={styles.video}>
			<div className={styles.trailer}>
				{!user.email.length > 0 ? (
					<div className={styles.sighIn}>
						<span>You must be logged in to start watching</span>
						<Button
							text={'Sign In'}
							type={'login'}
							emailLength={0}
							handleClick={function (): void {
								throw new Error('Function not implemented.')
							}}
						/>
					</div>
				) : (
					<ReactPlayer
						className={styles['react-player']}
						url={item.video}
						width={'100%'}
						height={'100%'}
						controls={true}
					/>
				)}
			</div>
			<div className={styles.description}>{item.description}</div>
		</div>
	)
}

export default MoviePlayer
