import { gql } from "apollo-server-express";

const busDetailsTypeDefs = gql`
  type BusDetails {
    _id:ID
    ScheduleForRouteId: Int
    Shift: String
    busNo: Int
    firstStopCode: Int
    firstStopName: String
    lastStopCode: Int
    lastStopName: String
    routeCode: String
    routeDestination: String
    routeName: String
    routeVariant: String
    runCode: String
    scheduleForRouteCode: String
    schedulecode: String
    startTime: String
    stopTime: String
    tripSeqNumber: String
    dutyCode: String
  }
  input userBusQuery {
    startLocation: String
    endLocation: String
    busTime: String
  }
  type filterdBuses{
    filterdBuses:[BusDetails]
  }
  type Query {
    getBusDetails(busDetails: userBusQuery): [filterdBuses]
  }
`;
export default busDetailsTypeDefs;
