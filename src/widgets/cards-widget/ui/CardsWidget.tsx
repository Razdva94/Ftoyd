import { Card } from '@/entities';
import { matchesApi } from '@/shared';
import { IMatch } from '@/interfaces';

const CardsWidget = () => {
	const { data: data } = matchesApi.useGetMatchesQuery();

	return (
		<main className="pt-[33px] w-full flex flex-col gap-[12px] pb-20">
			{data?.data?.matches.map((match: IMatch, i) => (
				<Card key={i} match={match} />
			))}
		</main>
	);
};

export default CardsWidget;
