import { convertToDate } from "../../libs/helper.js";
import RouteDetails from "../../models/RouteDetails.js";
const busDetailsResolvers = {
  Query: {
    // Fetch the data from the api and retuns to the user
    getBusDetails: async (parent, args, context, info) => {
      try {
        const { startLocation, endLocation, busTime } = args.busDetails;
        const userEnterdTime = convertToDate(busTime);
        let loweEndOfUserEnterdTime = convertToDate(busTime);
        let higherEndOfUserEnterdTime = convertToDate(busTime);

        loweEndOfUserEnterdTime = loweEndOfUserEnterdTime.setMinutes(
          userEnterdTime.getMinutes() - 20
        );

        higherEndOfUserEnterdTime = higherEndOfUserEnterdTime.setMinutes(
          userEnterdTime.getMinutes() + 20
        );
        
        const busDetailsWithRoute = await RouteDetails.aggregate([
          {
            $match: {
              startName: { $regex: startLocation, $options: "i" },
              endName: { $regex: endLocation, $options: "i" },
            },
          },
          {
            $lookup: {
              from: "busdetails",
              as: "data",
              foreignField: "routeCode",
              localField: "routeCode",
            },
          },
          {
            $project: {
              _id: 0,
              filterdBuses: {
                $filter: {
                  input: "$data",
                  as: "sc",
                  cond: {
                    $and: [
                      {
                        $gte: [
                          { $convert: { input: "$$sc.startTime", to: "date" } },
                          {
                            $convert: {
                              input: loweEndOfUserEnterdTime,
                              to: "date",
                            },
                          },
                        ],
                      },
                      {
                        $lte: [
                          { $convert: { input: "$$sc.startTime", to: "date" } },
                          {
                            $convert: {
                              input: higherEndOfUserEnterdTime,
                              to: "date",
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          },
          {
            $match: { $expr: { $gte: [{ $size: "$filterdBuses" }, 1] } },
          },
        ]);

        return busDetailsWithRoute;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
export default busDetailsResolvers;
