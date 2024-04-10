import React, { FC, FormEvent, useState } from 'react'
import styles from './Form.module.scss'

interface IFormProps {
	onSubmitHandler: (e: FormEvent<HTMLFormElement>) => void
	email: string
	setEmail: (value: string) => void
	password: string
	setPassword: (value: string) => void
	name: string
	setName: (value: string) => void
}

const Form: FC<IFormProps> = ({
	onSubmitHandler,
	email,
	setEmail,
	password,
	setPassword,
	name,
	setName
}) => {
	return (
		<form className={styles.form} onSubmit={onSubmitHandler}>
			{/* <input
				value={name}
				onChange={e => setName(e.target.value)}
				type='text'
				placeholder='Please to enter your name'
			/> */}
			<input
				value={email}
				onChange={e => setEmail(e.target.value)}
				className={styles.fieldEmail}
				type='email'
				placeholder='Please to enter your email'
			/>
			<input
				value={password}
				onChange={e => setPassword(e.target.value)}
				className={styles.fieldPassword}
				type='password'
				placeholder='Please to enter your password'
			/>
			<button className={styles.button} type='submit'>
				Register
			</button>
		</form>
	)
}

export default Form
