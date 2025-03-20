import logo from '@/assets/images/match-tracker.svg';
import HeaderButton from './HeaderButton';
import HeaderErrorMessage from './HeaderErrorMessage';
import { matchesApi } from '@/shared';

const Header = () => {
	const { error } = matchesApi.useGetMatchesQuery();

	return (
		<header className="w-full flex justify-between">
			<img src={logo} alt="logo" />
			<div className="flex gap-5">
				{error && <HeaderErrorMessage />} <HeaderButton />
			</div>
		</header>
	);
};

export default Header;
