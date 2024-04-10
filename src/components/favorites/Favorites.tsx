import React, { useEffect } from 'react'
import styles from './Favorites.module.scss'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import { useSelector } from 'react-redux'
import Card from '../ui/card/Card'
import { useContext } from 'react'
import { AuthContext, IAuthContext } from '../../utils/AuthContext'
import { RootState } from '../../redux/store'

const Favorites = () => {
	const { user, setUser } = useContext<any>(AuthContext)
	const favorites = useSelector((state: RootState) => state.favorites)
	console.log(favorites)

	// setUser(prev => ({ ...prev, favoritesFilm: [...favorites] }))
	return (
		<Layout>
			<div className={styles.favorites}>
				<Container>
					<h4>Favorites movies</h4>
					{user.email.length ? (
						<div className={styles.items}>
							{favorites.map(item => (
								<Card
									item={item}
									type={item.type}
									key={item.id}
									isLoading={false}
								/>
							))}
						</div>
					) : (
						<div>Необходимо зарегестироваться или войти</div>
					)}
				</Container>
			</div>
		</Layout>
	)
}

export default Favorites
