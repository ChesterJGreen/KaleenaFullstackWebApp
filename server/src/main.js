import express from 'express'
import { createServer } from 'http'
import { socketProvider } from './SocketProvider'
import { Startup } from './Startup'
import { logger } from './utils/Logger'
const DbConfig = require('./db/DbConfig.js')

// create server & socketServer
const app = express()
const port = process.env.PORT || 3000

if (process.env.NODE_ENV == 'dev') {
  // @ts-ignore
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
}

const httpServer = createServer(app)
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Establish Socket
socketProvider.initialize(httpServer)


// Start Server
httpServer.listen(port, async () => {
  logger.log(`[SERVING ON PORT: ${port}]`);
  await DbConfig.db;
})
