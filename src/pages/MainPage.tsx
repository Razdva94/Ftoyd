import { Header } from '@/entities';
import { api } from '@/shared';
import { setCurrentData } from '@/store/collectMatchesInfoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CardsWidget } from '@/widgets';
const MainPage = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		const fetchData = async () => {
			const matches = await api.getMatches();
			console.log(matches, 'matches');
			dispatch(setCurrentData(matches));
		};
		fetchData();
	}, [dispatch]);
	return (
		<div className="flex flex-col  items-start h-full font-InterR bg-[#06080C] px-[42px] pt-[53px]">
			<Header />
			<CardsWidget />
		</div>
	);
};
export default MainPage;
