import { gql } from "apollo-server-express";

const busDetailsTypeDefs = gql`
  type BusDetails {
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
  type Query {
    getBusDetails: String
  }
`;
export default busDetailsTypeDefs;
