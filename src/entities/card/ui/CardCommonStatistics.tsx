import React from 'react';
import type { ITeam } from '@/interfaces';

interface ICardCommonStatistics {
	commonInfo: Omit<ITeam, 'players' | 'name'>;
}
const CardCommonStatistics: React.FC<ICardCommonStatistics> = ({
	commonInfo,
}) => {
	return (
		<div className="rounded-[4px] flex justify-around bg-[#101318] w-[874px] h-[52px] items-center">
			<p className="font-InterR text-[14px] text-white-opacity">
				Points:
				<span className="ml-[10px] font-InterB text-[16px] text-white">
					{commonInfo.points}
				</span>
			</p>
			<p className="font-InterR text-[14px] text-white-opacity">
				Место
				<span className="ml-[10px] font-InterB text-[16px] text-white">
					{commonInfo.place}
				</span>
			</p>
			<p className="font-InterR text-[14px] text-white-opacity">
				Всего убийств
				<span className="ml-[10px] font-InterB text-[16px] text-white">
					{commonInfo.total_kills}
				</span>
			</p>
		</div>
	);
};

export default CardCommonStatistics;
