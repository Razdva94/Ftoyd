import { configureStore } from '@reduxjs/toolkit';
import { matchesApi } from '@/shared';

export const store = configureStore({
	reducer: {
		[matchesApi.reducerPath]: matchesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(matchesApi.middleware),
});

export {};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
