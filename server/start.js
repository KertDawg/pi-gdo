
const Express = require("express");
const ExApp = Express();
const WebPort = 8081;


ExApp.get("/", function (req, res) {
  res.send("Hello World!");
});

ExApp.listen(WebPort, function () {
  console.log(`pi-gdo-server listening on port ${WebPort}!`);
});
