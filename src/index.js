import express from 'express';
import mongoConnection from './modules/core/db';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import ignoreFavicon from './modules/core/ignoreFavicon';
import routes from './modules/core/routes';
import cors from './modules/core/cors';
import errorHandling from './modules/core/errorHandling';
import { getAPIInfo } from './modules/crypto/controllers/cryptoGetAPI';


const PORT = +process.env.PORT || 5000;
const app = express();

// const server = http.createServer(app);
//
// const wss = new Websocket.Server({ server: server });
// wss.on('connection', function connection(ws) {
//   ws.send('Hello new Client!')
//   console.log("A new client connect");
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });
//
//   ws.send('something');
// });

app.disable('x-powered-by'); // DISABLE EXPRESS SIGNATURE
mongoConnection();
logger(app);
parseResponse(app);
cors(app);
ignoreFavicon(app);
routes(app);
errorHandling(app);
getAPIInfo();

app.listen(PORT, () => {
  console.log(`Node cluster worker ${process.pid}: listening on http://localhost:${PORT}/info`);

});
