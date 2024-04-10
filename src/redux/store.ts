import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/movieApi'
import { serialApi } from './api/serialsApi'
import authSlice from './authSlice/auth.slice'
import favoritesSlice from './favoritesSlice/favoritesSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		favorites: favoritesSlice,
		[movieApi.reducerPath]: movieApi.reducer,
		[serialApi.reducerPath]: serialApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(movieApi.middleware, serialApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
