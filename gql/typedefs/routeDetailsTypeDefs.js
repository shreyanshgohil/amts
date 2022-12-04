import { gql } from "apollo-server-express";

const routeDetailsTypeDefs = gql`
  type RouteDetails {
    routeId: Int
    routeCode: String
    customerRouteCode: String
    route: String
    startName: String
    endName: String
    startStopCode: Int
    endStopCode: Int
    startTime: String
    endTime: String
    days: String
    linetype: String
    Variant: String
  }
  
`;
export default routeDetailsTypeDefs;
