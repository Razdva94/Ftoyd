import { Header } from '@/entities';
import { matchesApi } from '@/shared';
import { CardsWidget } from '@/widgets';
import classNames from 'classnames';
const MainPage = () => {
	const { data: data } = matchesApi.useGetMatchesQuery();
	return (
		<div
			className={classNames(
				'flex flex-col  items-start font-InterR bg-[#06080C] px-[42px] pt-[53px] w-[1920px]',
				{
					'h-screen': data === undefined,
				},
			)}
		>
			<Header />
			<CardsWidget />
		</div>
	);
};
export default MainPage;
