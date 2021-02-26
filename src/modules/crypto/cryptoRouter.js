import { Router } from 'express';

import cryptoGetAll from'./controllers/cryptoGetAll'
import cryptoCreate from './controllers/cryptoCreate';
import infoRouter from '../info/infoRoutes';

const cryptoRouter = Router();
cryptoRouter.post('/create', cryptoCreate);
cryptoRouter.get('/getAll', cryptoGetAll);

export default cryptoRouter;
