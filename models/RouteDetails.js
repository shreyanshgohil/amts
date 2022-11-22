import mongoose from "mongoose";

const RouteDetailsSchema = new mongoose.Schema(
  {
    routeId: {
      type: Number,
    },
    routeCode: {
      type: String,
    },
    customerRouteCode: {
      type: String,
    },
    route: {
      type: String,
    },
    startName: {
      type: String,
    },
    endName: {
      type: String,
    },
    startStopCode: {
      type: Number,
    },
    endStopCode: {
      type: Number,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    days: {
      type: String,
    },
    linetype: {
      type: String,
    },
    Variant: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("RouteDetails", RouteDetailsSchema);
