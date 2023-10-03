import { Router } from 'express';
import { createGame,updateGame, findManyGames, findOneGame } from '../controllers/game-controller';
import { inputGameSchema, updateGameSchema } from '../schemas/game-schemas';
import { validateBody } from '../middlewares';

const gameRouter = Router();

gameRouter.post('', validateBody(inputGameSchema), createGame );
gameRouter.post('/:id/finish', validateBody(updateGameSchema), updateGame );
gameRouter.get('', findManyGames);
gameRouter.get('/:id', findOneGame);

export { gameRouter };