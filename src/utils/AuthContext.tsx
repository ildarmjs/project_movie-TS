import React, { FC, ReactNode, createContext, useState, useEffect } from 'react'

export interface IUser {
	email: string
}

export interface IAuthContext {
	setUser: React.Dispatch<React.SetStateAction<IUser>>
	user: IUser
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined)

const Context: FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<IUser>({ email: '' })

	useEffect(() => {
		const storedUser = localStorage.getItem('user')
		if (storedUser) {
			const parsedUser = JSON.parse(storedUser) as IUser
			setUser(parsedUser)
		}
	}, [])

	const value: IAuthContext = {
		setUser,
		user
	}

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default Context
