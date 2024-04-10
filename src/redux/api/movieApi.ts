import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IFilm } from '../../types/film.interface'

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_BASE_URL}/movies`
	}),
	endpoints: builder => ({
		getMovies: builder.query<IFilm[], void>({ query: () => '/' }),
		getMovieById: builder.query<IFilm, number>({ query: movieId => `/${movieId}` })
	})
})

export const { useGetMoviesQuery, useGetMovieByIdQuery } = movieApi
