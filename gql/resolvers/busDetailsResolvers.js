import RouteDetails from "../../models/RouteDetails.js";
const busDetailsResolvers = {
  Query: {
    getBusDetails: async (parent, args, context, info) => {
      const { startLocation, endLocation, busTime } = args.busDetails;
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
                cond: { $eq: ["$$sc.startTime", busTime] },
              },
            },
          },
        },
        {
          $match: { $expr: { $gte: [{ $size: "$filterdBuses" }, 1] } },
        },
      ]);

      return busDetailsWithRoute;
    },
  },
};
export default busDetailsResolvers;
