import React from 'react';
import CardUserStatistics from './CardUserStatistics';
import CardCommonStatistics from './CardCommonStatistics';
import type { ITeam } from '@/interfaces';

interface ICardStatistics {
	teamStats: ITeam;
}
const CardStatistics: React.FC<ICardStatistics> = ({ teamStats }) => {
	const commonStats = {
		points: teamStats.points,
		total_kills: teamStats.total_kills,
		place: teamStats.place,
	};

	return (
		<div className="flex flex-col gap-[8px]">
			<CardUserStatistics playersInfo={teamStats.players} />
			<CardCommonStatistics commonInfo={commonStats} />
		</div>
	);
};

export default CardStatistics;
