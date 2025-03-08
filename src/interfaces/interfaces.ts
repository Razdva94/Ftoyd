interface IData {
	data: { matches: IMatch[] } | undefined;
	ok: boolean | undefined;
}

interface IMatch {
	awayScore: number;
	awayTeam: ITeam;
	homeScore: number;
	homeTeam: ITeam;
	status: string;
	time: string;
	title: string;
}

interface ITeam {
	name: string;
	place: number;
	players: IPlayers[];
	points: number;
	total_kills: number;
}

interface IPlayers {
	kills: number;
	username: string;
}

export type { IData, IMatch, ITeam, IPlayers };
