import { configureStore } from '@reduxjs/toolkit';
import collectMatchesInfoReducer from './collectMatchesInfoSlice';
import errorToggleReducer from './errorToggleSlice';

export const store = configureStore({
	reducer: {
		errorToggleHandler: errorToggleReducer,
		collectMatchesInfoHandler: collectMatchesInfoReducer,
	},
});

export {};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
