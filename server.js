import express from "express";
// import { ApolloServer } from "apollo-server-express";
// import mongoose from "mongoose";
import { config } from "dotenv";
// import indexResolver from "./gql/resolvers/indexResolvers.js";
// import indexTypedefs from "./gql/typedefs/indexTypeDefs.js";
import https from "https";
import { getAcessTokenHandler } from "./libs/helper.js";

// inits
const app = express();
config();

const fetchInitialData = () => {
  const acessToken = getAcessTokenHandler();
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

// for initial server connect and start database
// const startServer = async () => {
//   try {
//     const response = mongoose.connect(process.env.MONGO_URL);
//     const apolloServer = new ApolloServer({
//       typeDefs: indexTypedefs,
//       resolvers: indexResolver,
//     });
//     await apolloServer.start();
//     apolloServer.applyMiddleware({ app });
//     app.listen(5000, () => {
//       console.log("server is started and database is connected");
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
// startServer();
