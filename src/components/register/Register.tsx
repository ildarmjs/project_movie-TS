import React, { useContext, useState } from 'react'
import Layout from '../layout/Layout'
import Container from '../ui/container/Container'
import styles from './Register.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../utils/AuthContext'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface RegisterData {
	name: string
	tel: string

	email: string
	password: string
}

const Register = () => {
	const [status, setStatus] = useState(false)
	const { user, setUser } = useContext<any>(AuthContext)
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm<RegisterData>({
		mode: 'all'
	})

	const navigate = useNavigate()

	const submitHandler: SubmitHandler<RegisterData> = data => {
		let newUser = {
			name: data.name,
			tel: data.tel,
			email: data.email,
			password: data.password,
			favoritesFilm: []
		}
		axios
			.post(`${import.meta.env.VITE_BASE_URL}/register`, newUser)
			.then(({ data }) => {
				setUser({ token: data.token, ...data.data })
				localStorage.setItem(
					'user',
					JSON.stringify({ token: data.token, ...data.data })
				)
				navigate('/')
			})
			.catch(e => console.log(e.message))
		reset()
	}

	return (
		<Layout>
			<div className={styles.body}>
				<Container>
					<div className={styles.wrapper}>
						<h3 className={styles.title}>Register page</h3>
						<form
							className={styles.form}
							onSubmit={handleSubmit(submitHandler)}
						>
							<input
								type='text'
								placeholder='Please to enter your name'
								{...register('name', {
									required: 'Вы не ввели Имя',
									minLength: {
										value: 4,
										message: 'Имя должно содержать не менее 4 символов'
									}
								})}
							/>

							{errors.name && (
								<span className={styles.error}>{errors.name.message}</span>
							)}

							<input
								type='tel'
								placeholder='+ 7 999 123 12 34'
								{...register('tel', {
									required: 'Вы не ввели номер телефона',
									pattern: {
										value:
											/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g,
										message: 'Номер телефона введен некоректно'
									}
								})}
							/>
							{errors.tel && (
								<span className={styles.error}>{errors.tel.message}</span>
							)}

							<input
								className={styles.fieldEmail}
								type='email'
								placeholder='Please to enter your email'
								{...register('email', {
									required: 'Вы не ввели email',
									pattern: {
										value: /^\S+@\S+\.\S+$/g,
										message: 'email введён не корректно'
									}
								})}
							/>

							{errors.email && (
								<span className={styles.error}>{errors.email.message}</span>
							)}
							<div className={styles.password}>
								<input
									className={styles.fieldPassword}
									type={status ? 'text' : 'password'}
									placeholder='Please to enter your password'
									{...register('password', {
										required: 'Вы не ввели пароль',
										minLength: {
											value: 6,
											message: 'Пароль должен состоять минимум из 6 символов'
										}
									})}
								/>
								<div className={styles.status}>
									{status ? (
										<FaEyeSlash
											className={styles.eye}
											cursor='pointer'
											onClick={() => setStatus(false)}
										/>
									) : (
										<FaEye
											className={styles.eye}
											cursor='pointer'
											onClick={() => setStatus(true)}
										/>
									)}
								</div>
							</div>

							{errors.password && (
								<span className={styles.error}>{errors.password.message}</span>
							)}
							<button
								className={styles.button}
								type='submit'
								disabled={!isValid}
							>
								Register
							</button>
						</form>

						<p className={styles.text}>
							if your have account, <Link to='/login'>login</Link>
						</p>
					</div>
				</Container>
			</div>
		</Layout>
	)
}

export default Register
