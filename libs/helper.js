import https from "https";

export const getAcessTokenHandler = () => {
  const options = {
    host: "www.amts.co.in",
    port: 8081,
    path: "/token",
    method: "POST",
  };
  const postData = "grant_type=password";

  const reqGet = https.request(options, (res) => {
    res.setEncoding("utf-8");
    res.on("data", (d) => {
      console.log(d, "==============>");
    });
  });
  reqGet.write(postData);
  reqGet.end();
};
export const getRouteTimeTableHandler = () => {};
export const getBusOnRouteHandler = () => {};
