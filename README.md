## Boilerplate Express server for todo app

#### Install
`npm i` or `yarn`

#### Start on dev mode
`npm run dev`

#### Start on production mode
`npm start`

#### Mongo connection
Connected to Mongo Atlas https://www.mongodb.com/cloud/atlas. 
Feel free to use current Mongo DB account. 
Look at `.env` file. If you have your own Atlas account change it

`.env` file works only for dev mode.
For prod mode change environment variables on prod server (Heroku).

#### Composition
- Routing `./src/modules/core/cryptoRouter.js`
- DB (Mongo) `./src/modules/core/db.js`
- CORS `./src/modules/core/cors.js`
- Logger (Morgan)`./src/modules/core/logger.js`
- Parse response (body-parser) `./src/modules/core/parseResponse.js`
- Ignore favicon `./src/modules/core/ignoreFavicon.js`

#### Modules
All modules should be placed in `./src/modules`

##### Info
Current common information like app name, version, current time, timezone.


### ESlint + Prettier
It works together well.

### Babel
using the Babel

### Folder Structure 

“src” is a key folder.  Index.js is a key file which node.js executes. In this file cors policy, parsing of response, mongoDB connection, routes, errorHandling, sockets, are implemented. Module “core” has cors policy, parsing, logger, routes files.

“crypto” module has controllers which are used for routes and mongoDB data schema under the name cryptoMongoModel.js. In “controllers” module basic routers are implemented. Main functionality of those routers is collecting, deleting and saving all the data in MongoDB. cryptoGetApi router is a bit more complex as it involves API call  (provided by test) and after successfully receiving  data, it is then saved in MongoDB.

cryptoGetApi is directly called in index.js inside the socket. cryptoGetApi function receives paramters of cryptocurrencies and currency price required by user from the client via socket. Hence, user can control which data is saved to MongoDB and which data is retrieved later on from MongoDB.

“info” module has a basic controller which allows to get the data of location and local time of the server. Postman get, post, delete requests can be found in “docs” folder.

Server is deployed on Heroku https://crypto-service-yuriy-fomin.herokuapp.com/info

Please note that server can be a bit slow since is deployed in USA

