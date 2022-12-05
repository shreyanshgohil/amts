import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import {
  getAcessTokenHandler,
  getRouteTimeTableHandler,
  setBusDetailsToMongo,
  setRouteDetailsSchemaToMongo,
  getBusDetailsHandler,
} from "./libs/fetchData.js";

import indexTypedefs from "./gql/typedefs/indexTypeDefs.js";
import indexResolver from "./gql/resolvers/indexResolvers.js";
import { ApolloServer } from "apollo-server-express";

// inits
const app = express();
config();

// for initial server connect and start database
const startServer = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const apolloServer = new ApolloServer({
      typeDefs: indexTypedefs,
      resolvers: indexResolver,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(5000, () => {
      console.log("server is started and database is connected");
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();

// fetching the initial data and sending to the database
const fetchInitialData = async () => {
  const tokenData = await getAcessTokenHandler();
  // const routeData = await getRouteTimeTableHandler(tokenData);
  // const busData = await getBusDetailsHandler(tokenData);
  // setRouteDetailsSchemaToMongo(routeData);
  // setBusDetailsToMongo(busData)
};
fetchInitialData();
