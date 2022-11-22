import express, { json } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import {
  getAcessTokenHandler,
  getRouteTimeTableHandler,
  setRouteDetailsSchemaToMongo,
} from "./libs/helper.js";

// inits
const app = express();
config();

// for initial server connect and start database
const startServer = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log("server is started and database is connected");
    });
  } catch (err) {
    console.log(err);
  }
};
startServer();

const fetchInitialData = async () => {
  const tokenData = await getAcessTokenHandler();
  const routeData = await getRouteTimeTableHandler(tokenData);
  setRouteDetailsSchemaToMongo(routeData);
  // let options = {
  //   host: "jsonplaceholder.typicode.com",
  //   port: 443,
  //   path: "/posts",
  //   method: "GET",
  // };

  // // do the GET request
  // let reqGet = https.request(options, function (res) {
  //   res.setEncoding("utf-8");
  //   res.on("data", function (d) {
  //     console.log(d);
  //   });
  // });

  // reqGet.end();
};
fetchInitialData();
