import { IFilm } from "./film.interface"

interface IUser {
	name: string
	tel: string
	email: string
	id: number
	favoritesFilm: IFilm[]
}

