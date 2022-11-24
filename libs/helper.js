import https from "https";
import RouteDetails from "../models/RouteDetails.js";
import BusDetails from "../models/BusDetails.js";
// Fetch the token from the AMTS api
export const getAcessTokenHandler = () => {
  return new Promise((resolve, reject) => {
    const options = {
      host: "www.amts.co.in",
      port: 8081,
      path: "/token",
      method: "POST",
    };
    const postData = "grant_type=password";
    let data = "";
    const reqGet = https.request(options, (res) => {
      res.on("data", (chunck) => {
        data += chunck;
      });
      res.on("end", (_) => {
        resolve(JSON.parse(data));
      });
    });
    reqGet.write(postData);
    reqGet.end();
  });
};

// fetching the data of routes of AMTS
export const getRouteTimeTableHandler = (acessToken) => {
  return new Promise((resolve, reject) => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${acessToken.token_type} ${acessToken.access_token}`,
    };
    const options = {
      host: "www.amts.co.in",
      port: 8081,
      path: "/api/RouteTimeTable?Rows=692&Page=0",
      method: "GET",
      headers,
    };
    let data = "";
    const reqGet = https.request(options, (response) => {
      response.on("data", (chunck) => {
        data += chunck;
      });
      response.on("end", (_) => {
        resolve(JSON.parse(data));
      });
    });
    reqGet.end();
  });
};

// fetching the bus data from AMTS api
export const getBusDetailsHandler = (acessToken) => {
  return new Promise((resolve, reject) => {
    const headers = {
      Authorization: `${acessToken.token_type} ${acessToken.access_token}`,
    };
    const options = {
      host: "www.amts.co.in",
      port: 8081,
      path: "/api/BusesOnRoute?Rows=1&Page=0",
      method: "GET",
      headers,
    };
    let data = "";
    const reqGet = https.request(options, (response) => {
      response.on("data", (chunck) => {
        data += chunck;
      });
      response.on("end", (_) => {
        resolve(JSON.parse(data));
      });
    });
    reqGet.end();
  });
};

// setting the routes to the my mongodb databse
export const setRouteDetailsSchemaToMongo = async (routes) => {
  try {
    const { Data: routesData } = routes;
    await RouteDetails.collection.drop(); // temp comment
    await Promise.all(
      await routesData.map(async (routeData) => {
        const routeDetailsObj = new RouteDetails(routeData);
        await routeDetailsObj.save(); // temp commen
      })
    );
  } catch (err) {
    console.log(err);
  }
};

// setting the bus details to the mongodb database
export const setBusDetailsToMongo = async (busDetails) => {
  try {
    const { Data: busTrips } = busDetails;
    await BusDetails.collection.drop();
    await Promise.all(
      busTrips.map(async (singleBusData) => {
        const singleBusDataObj = new BusDetails(singleBusData);
        await singleBusDataObj.save();
      })
    );
  } catch (err) {
    console.log(err);
  }
};
export const getBusOnRouteHandler = () => {};