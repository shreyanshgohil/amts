import mongoose from "mongoose";

const routeTitmeTableSchema = new mongoose.Schema({
  variant: String,
  customerRouteCode: String,
  days: String,
  endName: String,
  endStopCode: Number,
  endTime: String,
  linetype: String,
  route: String,
  routeCode: String,
  routeId: Number,
  startName: String,
  startStopCode: Number,
  startTime: String,
});

export default mongoose.model("RouteTitmeTable", routeTitmeTableSchema);
