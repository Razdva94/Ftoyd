import React from 'react';
import refresh from '@/assets/images/Refresh.svg';
import classNames from 'classnames';
import { matchesApi } from '@/shared';

const HeaderButton: React.FC = () => {
	const [trigger, { isFetching }] = matchesApi.useLazyGetMatchesQuery();

	const handleClick = async () => {
		try {
			await trigger();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<button
			onClick={handleClick}
			type="button"
			className="text-[white] font-InterR text-[18px] flex gap-[10px]
      rounded-[4px] items-center justify-center w-[204px] h-[56px] bg-[#EB0237]
      cursor-pointer"
		>
			<p>Обновить</p>
			<img
				src={refresh}
				className={classNames({ 'animate-spin': isFetching })}
				alt="refresh"
			/>
		</button>
	);
};

export default HeaderButton;
