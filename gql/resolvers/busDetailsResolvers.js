const busDetailsResolvers = {
  Query: {
    getBusDetails:async (parent, args, context, info) => {
        return "connected sucessfully"
    },
  },
};
export default busDetailsResolvers;
