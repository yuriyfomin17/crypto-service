import cryptoRouter from '../crypto/cryptoRouter';
import infoRouter from '../info/infoRoutes';

export default function routes(app) {
  app.use('/crypto', cryptoRouter);
  app.use('/info', infoRouter);
}
