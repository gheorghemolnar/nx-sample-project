import express, { Application } from 'express';
import appMonitor from 'express-status-monitor';
import cors, { CorsOptions } from 'cors';
import figlet from "figlet";
import helmet from "helmet";
import swaggerJSDoc  from 'swagger-jsdoc';
import swaggerUI  from "swagger-ui-express";

import {createCorsOptions, goodRequestCheckerMiddleware, routerPing} from '@myorg/feature/api-response';
import { loggerMiddleware } from "@myorg/feature/logger"
import { createTopic, listTopics } from "@myorg/feature/kafka";
import { closeGracefullyEverything } from "@myorg/util/error";
import { line } from "@myorg/util/misc";

import { getSwagger } from './swagger';

import router from './app/landfill-orchestration.router';

const port: string | number = process.env.PORT || 30006;
const app: Application = express();

const specs = swaggerJSDoc(getSwagger(port));
console.log("🚀 <<< SPEC >>>", JSON.stringify(specs)); // the JSON is generated OK at this point
//I would like to have the same results as here, but by calling the "dumb.ts" file.

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
let server = null;

/**
 * Declare middlewares.
 */
app.use(appMonitor());
app.use(loggerMiddleware);
app.use(express.json());
app.use(helmet());

/**
 * Declare custom middlewares.
 */
app.use(goodRequestCheckerMiddleware);

/**
 * Setup CORS.
 */
const whitelist = [`http://localhost:${port}`];
const corsOptions: CorsOptions = createCorsOptions({
  whitelist,
});
app.use(cors(corsOptions));

/**
 * Declare routes.
 */
app.use(routerPing);
app.use(router);

/**
 * Handle assets.
 */
app.use(express.static('public'));


/**
 * Start the server.
 */
try {
  server = app.listen(port, async(): Promise<void> => {
    figlet("MYORG Orchestrator", (err, data) => {
      if(err) {
        console.log("Something went wrong...", err)
        return
      };
      console.log(data)
    })
    setTimeout(() => {
      console.log(line)
      figlet(`LANDFILL : ${port}`, (err, data) => {
        if(err) {
          console.log("Something went wrong...", err)
          return
        };
        console.log(data)
      })
    }, 50)

  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}

/**
 * Close gracefully the server.
 */
closeGracefullyEverything({
  app: server,
})
