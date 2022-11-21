import mongoose from "mongoose";

const busOnRouteSchema = new mongoose.model({
  ScheduleForRouteId: Number,
  Shift: {
    type: String,
    default: null,
  },
  busNo: {
    type: Number,
    default: 0,
  },
  firstStopCode: {
    type: Number,
  },
  firstStopName: {
    type: String,
  },
  lastStopCode: {
    type: Number,
  },
  lastStopName: {
    type: String,
  },
  routeCode: {
    type: String,
  },
  routeDestination: {
    type: String,
  },
  routeName: {
    type: String,
  },
  routeVariant: {
    type: String,
  },
  runCode: {
    type: String,
  },
  scheduleForRouteCode: {
    type: String,
  },
  schedulecode: {
    type: String,
  },
  startTime: {
    type: String,
  },
  stopTime: {
    type: String,
  },
  tripSeqNumber: {
    type: String,
  },
});

export default mongoose.model("BusOnRoute", busOnRouteSchema);
