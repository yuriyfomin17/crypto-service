import { Router } from 'express';

import cryptoGetAll from'./controllers/cryptoGetAll'
import dropCollection from './controllers/dropCollection';

const cryptoRouter = Router();
cryptoRouter.get('/getAll', cryptoGetAll);
cryptoRouter.delete('/delete', dropCollection);

export default cryptoRouter;
