import { Router } from 'express';
import {socket} from './socketController';

const router = Router();

router.get('/', socket);

export default router;
