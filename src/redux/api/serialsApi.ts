import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MoviesService } from '../../services/movies.service'
import { IFilm } from '../../types/film.interface'

export const serialApi = createApi({
	reducerPath: 'serialApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}/serials`
	}),
	endpoints: builder => ({
		getSerials: builder.query<IFilm[], void>({
			query: () => `/`
		})
	})
})

export const { useGetSerialsQuery } = serialApi
