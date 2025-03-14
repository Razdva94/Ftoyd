import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData } from '@/interfaces';

// Создаём API Slice
export const matchesApi = createApi({
	reducerPath: 'matchesApi',
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL}` }),
	endpoints: (builder) => ({
		getMatches: builder.query<IData, void>({
			query: () => '/fronttemp',
		}),
	}),
});

export const { useGetMatchesQuery, useLazyGetMatchesQuery } = matchesApi;
