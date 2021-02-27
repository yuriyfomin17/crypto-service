import express from 'express';
import mongoConnection from './modules/core/db';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import ignoreFavicon from './modules/core/ignoreFavicon';
import routes from './modules/core/routes';
import cors from './modules/core/cors';
import errorHandling from './modules/core/errorHandling';
import { getAPIInfo } from './modules/crypto/controllers/cryptoGetAPI';



const useSocket = require('socket.io');

// const Websocket = require('ws');


const PORT = process.env.PORT || 8080;

const app = express();


app.disable('x-powered-by'); // DISABLE EXPRESS SIGNATURE
mongoConnection();
logger(app);
parseResponse(app);
cors(app);
ignoreFavicon(app);
routes(app);
errorHandling(app);


//<-------------------------------WebSocket------------------------------------------------------>

const server = require('http').Server(app);
//server can now use socket

const io = useSocket(server);
io.on('connection', socket => {
  console.log('socket ID', socket.id);
  socket.on('CRYPTO_GET_DATABSE', (data) => {
    const { urlRequest, cryptoAndCurrencyArray, requestPrice } = data;
    console.log("-----------cryptoAndCurrencyArray-----------", cryptoAndCurrencyArray);
    getAPIInfo(urlRequest, cryptoAndCurrencyArray, requestPrice)
  });


});

//<-------------------------------WebSocket------------------------------------------------------>


server.listen(PORT, () => {
  console.log(`Node cluster worker ${process.pid}: listening on http://localhost:${PORT}/info`);
});

export default io;


