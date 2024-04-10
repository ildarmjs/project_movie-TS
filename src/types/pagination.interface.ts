import { IFilm } from "./film.interface"

export interface IPaginationData {
	meta: {
		total_pages: number
		per_page: number
		remaining_count: number
		total_items: number
	}
	items: IFilm
}