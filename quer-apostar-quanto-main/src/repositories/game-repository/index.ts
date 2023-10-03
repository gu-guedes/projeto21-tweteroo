import { GameInput, GameUpdate } from '../../protocols';
import { prisma } from '../../config';
import { betsResultsCalculator, amountWonCalculator } from '../../helpers';
import { betRepository } from '../../repositories/bet-repository';
import { participantRepository } from '../../repositories/participant-repository';

function create(data:GameInput){
	return prisma.game.create({data});
}
function findOne(id:number){
	return prisma.game.findUnique({
		where:{id},
		include:{
			Bet:true
		}
	});
}
async function update(id:number, data:GameUpdate){
	return await prisma.$transaction(async () => {
		const [game, bets] = await Promise.all([
			prisma.game.update({where:{id}, data:{...data, isFinished:true}}),
			prisma.bet.findMany({where:{gameId:id}}),
		]);

		const { allBetsAmount, allWinnerBetsAmount } = betsResultsCalculator(bets, data);

		for(const bet of bets){
			const won = (data.awayTeamScore === bet.awayTeamScore) && (data.homeTeamScore === bet.homeTeamScore);
			const amountWon = won ? amountWonCalculator(bet.amountBet, allWinnerBetsAmount, allBetsAmount) : 0;
			const status = won ? 'WON' : 'LOST';

			await Promise.all([
				betRepository.update(bet.id, {status, amountWon}, prisma),
				participantRepository.update(bet.participantId, amountWon, prisma)
			]);
		}

		return game;
	});
}

function findMany(){
	return prisma.game.findMany();
}

export const gameRepository = {
	create,
    findOne,
    update,
    findMany
};