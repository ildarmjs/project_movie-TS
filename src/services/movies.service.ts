import axios from 'axios'

export const MoviesService = {
	async getAll(category: string) {
		return await axios.get(`${import.meta.env.VITE_BASE_URL}/${category}`)
	},
	async getOneMovie(id: number, category: string) {
		return await axios.get(`${import.meta.env.VITE_BASE_URL}/${category}/${id}`)
	},
	async getMovieSimilar(slug: string, category: string) {
		return await axios.get(
			`${import.meta.env.VITE_BASE_URL}/${category}?genres.slug=${slug}`
		)
	},
	async searchMovie(title = '') {
		return await axios.get(
			`${import.meta.env.VITE_BASE_URL}/all-films?title=*${title}`
		)
	},
	async getSerialsPaginationAndSorting(
		category: string,
		page = 1,
		sort = '',
		limit = 4
	) {
		return await axios.get(
			`${import.meta.env.VITE_BASE_URL
			}/${category}?page=${page}&limit=${limit}&sortBy=${sort}`
		)
	}
}
