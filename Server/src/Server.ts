import * as toto from 'mongoose';
import * as express from "express";
import { Bootstrapper } from './Bootstrapper';
import { ContainerAdapter } from './ContainerAdapter';
import { MongoDatabase } from './Infrastructure/Database/MongoDatabase';
import { createExpressServer, useContainer } from "routing-controllers";
export class Server {

  public Start() {
    let container = Bootstrapper.Boot();
    useContainer(new ContainerAdapter(container), { fallback: true, fallbackOnErrors: true });

    createExpressServer({
      routePrefix: "/api",
      controllers: [__dirname + "/Controller/*.js"]
    }).listen(10000);
    
  }

}


