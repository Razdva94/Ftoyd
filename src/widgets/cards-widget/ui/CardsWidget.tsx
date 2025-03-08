import React from 'react';
import { Card } from '@/entities';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { IMatch } from '@/interfaces';

const CardsWidget = () => {
	const cardsData: IMatch[] | undefined = useSelector(
		(state: RootState) => state.collectMatchesInfoHandler,
	).data?.matches;
	return (
		<main className="pt-[33px] w-full flex flex-col gap-[12px] pb-20">
			{cardsData &&
				cardsData.map((match) => {
					return <Card match={match} />;
				})}
		</main>
	);
};

export default CardsWidget;
