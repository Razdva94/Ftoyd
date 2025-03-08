import React from 'react';
import teamIcon from '@/assets/images/teamIcon.svg';
import arrow from '@/assets/images/arrow.svg';
import { IMatch } from '@/interfaces';
import classNames from 'classnames';
import CardStatistics from './CardStatistics';

interface ICard {
	match: IMatch;
}

const Card: React.FC<ICard> = ({ match }) => {
	const [tabVisibility, setTabVisibility] = React.useState(false);
	let matchStatus: string;
	switch (match.status) {
		case 'Ongoing':
			matchStatus = 'Live';
			break;
		case 'Sheduled':
			matchStatus = 'Match preparing';
			break;
		case 'Finished':
			matchStatus = 'Finisded';
			break;
		default:
			'';
			return;
	}
	return (
		<div className="text-white bg-[#0B0E12] font-InterR flex flex-col gap-5">
			<div className=" h-[87px] px-[40px]  rounded-[4px] flex justify-between  items-center">
				<div className="flex gap-1 items-center">
					<img src={teamIcon} alt="teamIcon" />
					<p>{match.awayTeam.name}</p>
				</div>
				<div className="flex flex-col items-center gap-2">
					<p className="font-InterB text-[20px]">
						{match.awayScore} : {match.homeScore}
					</p>
					<p
						className={classNames(
							'text-[12px] rounded-[4px] w-[92px] h-[27px] flex items-center justify-center',
							{
								'bg-[#43AD28]': match.status === 'Ongoing',
								'bg-[#EB0237]': match.status === 'Finished',
								'bg-[#EB6402]': match.status === 'Sheduled',
							},
						)}
					>
						{matchStatus}
					</p>
				</div>
				<div className="flex gap-1 items-center">
					<img src={teamIcon} alt="teamIcon" />
					<p>{match.homeTeam.name}</p>
					<button
						type="button"
						onClick={() => setTabVisibility(!tabVisibility)}
					>
						<img
							className={classNames('cursor-pointer', {
								'rotate-180': tabVisibility === true,
							})}
							src={arrow}
							alt="arrow"
						/>
					</button>
				</div>
			</div>
			{tabVisibility && (
				<div className="flex gap-[32px]">
					<CardStatistics teamStats={match.awayTeam} />
					<CardStatistics teamStats={match.homeTeam} />
				</div>
			)}
		</div>
	);
};

export default Card;
