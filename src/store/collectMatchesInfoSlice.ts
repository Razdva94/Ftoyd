import { createSlice } from '@reduxjs/toolkit';
import type { IData } from '@/interfaces';

const initialState: IData = {
	data: undefined,
	ok: undefined,
};

const collectMatchesInfoSlice = createSlice({
	name: 'collectMatchesInfo',
	initialState,
	reducers: {
		setCurrentData: (_, action) => {
			return action.payload;
		},
	},
});

export const { setCurrentData } = collectMatchesInfoSlice.actions;
export default collectMatchesInfoSlice.reducer;
