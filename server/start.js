
const Express = require("express");
const ExApp = Express();
const WebPort = 8080;
var Router = Express.Router();
var GPIO = require("onoff").Gpio;
var GDOOut = new GPIO(2, "out");


function PushTheButton()
{
  TurnGPIOOn();
  setTimeout(TurnGPIOOff, 200);

  return "Pushed";
}

function TurnGPIOOn()
{
  GDOOut.writeSync(1);
}

function TurnGPIOOff()
{
  GDOOut.writeSync(0);
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
