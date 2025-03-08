import { createSlice } from '@reduxjs/toolkit';

interface errorState {
	isErrorVisible: boolean;
}

const initialState: errorState = {
	isErrorVisible: false,
};

const errorToggleSlice = createSlice({
	name: 'handleError',
	initialState,
	reducers: {
		setErrorTrue: (state) => {
			state.isErrorVisible = true;
		},
		setErrorFalse: (state) => {
			state.isErrorVisible = false;
		},
	},
});

export const { setErrorFalse, setErrorTrue } = errorToggleSlice.actions;
export default errorToggleSlice.reducer;
