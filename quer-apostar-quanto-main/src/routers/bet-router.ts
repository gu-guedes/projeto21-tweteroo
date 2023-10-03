import { Router } from 'express';
import { createBet } from '../controllers/bet-controller'; 
import { validateBody } from '../middlewares';
import { inputBetSchema } from '../schemas/bet-schemas';

const betRouter = Router();

betRouter.post('', validateBody(inputBetSchema), createBet);

export { betRouter };