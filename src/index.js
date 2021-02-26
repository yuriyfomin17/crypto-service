import express from 'express';
import mongoConnection from './modules/core/db';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import ignoreFavicon from './modules/core/ignoreFavicon';
import routes from './modules/core/routes';
import cors from './modules/core/cors';
import errorHandling from './modules/core/errorHandling';
import { getAPIInfo } from './modules/crypto/controllers/cryptoGetAPI';
import cryptoModel from './modules/crypto/cryptoMongoModel';
import { socket } from './modules/socket/socketController';


const useSocket = require('socket.io');

// const Websocket = require('ws');


const PORT = process.env.PORT || 5000;

const app = express();


app.disable('x-powered-by'); // DISABLE EXPRESS SIGNATURE
mongoConnection();
logger(app);
parseResponse(app);
cors(app);
ignoreFavicon(app);
routes(app);
errorHandling(app);
getAPIInfo();


//<-------------------------------WebSocket------------------------------------------------------>

const server = require('http').Server(app);
//server can now use socket
const io = useSocket(server);
io.on('connection', socket => {
  console.log('socket ID', socket.id);
  socket.on('CRYPTO_GET_DATABSE', (data) => {
    console.log(data);
    socket.emit('CRYPTO_GOT_FROM_DATABSE', 'HELLO');
  });
  cryptoModel.watch().on('change', (change) => {
    const result = change.fullDocument.arrayInfo
    socket.emit('change', result);

  });

});

//<-------------------------------WebSocket------------------------------------------------------>


server.listen(PORT, () => {
  console.log(`Node cluster worker ${process.pid}: listening on http://localhost:${PORT}/info`);
});

export default io;


