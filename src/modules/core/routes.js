import cryptoRouter from '../crypto/cryptoRouter';
import infoRouter from '../info/infoRoutes';
import { Router } from 'express';

export default function routes(app) {
  app.use('/crypto', cryptoRouter);
  app.use('/info', infoRouter);
}
