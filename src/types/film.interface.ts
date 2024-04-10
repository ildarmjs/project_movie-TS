export interface IFilm {
	id: number
	poster: string
	title: string
	video: string
	rating: number
	description: string
	time: number
	country: string
	genres: IGenre[]
	actors: IActor[]
	year: number
	age_limit: number
	price: string
	slug: string
	type: string
	bigPoster?: string

}

export interface IGenre {
	id: string,
	name: string
	slug: string
}
export interface IActor {
	id: string,
	name: string
	photo: string
	slug: string
}