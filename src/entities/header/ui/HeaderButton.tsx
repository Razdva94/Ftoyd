import React from 'react';
import refresh from '@/assets/images/Refresh.svg';
import classNames from 'classnames';
import { setCurrentData } from '@/store/collectMatchesInfoSlice';
import { api } from '@/shared';
import { useDispatch } from 'react-redux';
import { setErrorFalse, setErrorTrue } from '@/store/errorToggleSlice';

const HeaderButton = () => {
	const [isAnimated, setIsAnimated] = React.useState(false);
	const dispatch = useDispatch();
	const handleClick = () => {
		const fetchData = async () => {
			dispatch(setErrorFalse());
			setIsAnimated(true);
			try {
				const matches = await api.getMatches();
				dispatch(setCurrentData(matches));
			} catch {
				dispatch(setErrorTrue());
			}
			setIsAnimated(false);
		};
		fetchData();
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
				className={classNames({
					'animate-spin': isAnimated,
				})}
				alt="refresh"
			></img>
		</button>
	);
};

export default HeaderButton;
