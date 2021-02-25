import { Router } from 'express';

import cryptoGetAll from './controllers/cryptoGetAll';
import cryptoCreate from './controllers/cryptoCreate';

const router = Router();
router.post('/create', cryptoCreate);
router.get('/getAll', cryptoGetAll);

export default router;
