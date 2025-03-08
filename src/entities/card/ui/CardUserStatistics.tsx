import React from 'react';
import avatar from '@/assets/images/avatar.svg';
import type { IPlayers } from '@/interfaces';

interface IPlayersInfo {
	playersInfo: IPlayers[];
}
const CardUserStatistics: React.FC<IPlayersInfo> = ({ playersInfo }) => {
	return (
		<div className="flex gap-[8px]">
			{playersInfo.map((player) => {
				return (
					<div className="rounded-[4px] bg-[#101318] px-[24px] py-[8px] flex justify-between items-center w-[286px] h-[52px]">
						<div className="flex items-center gap-[8px]">
							<img src={avatar} alt="avatar" />
							<p className="font-InterB text-[16px]">{player.username}</p>
						</div>
						<p className="font-InterR text-[14px] text-white-opacity">
							Убийств:
							<span className="ml-[10px] font-InterB text-[16px] text-white">
								{player.kills}
							</span>
						</p>
					</div>
				);
			})}
		</div>
	);
};
export default CardUserStatistics;
