
const Express = require("express");
const ExApp = Express();
const WebPort = 8080;
var Router = Express.Router();


function PushTheButton()
{
  return "Pushed";
}

ExApp.post("/api/pushthebutton", function (req, res) {
  res.send(PushTheButton());
});

ExApp.get("/api", function (req, res) {
  res.send("Hello World!");
});

ExApp.use(Express.static("../client/dist/spa"));

ExApp.listen(WebPort, function () {
  console.log(`pi-gdo-server listening on port ${WebPort}!`);
});
