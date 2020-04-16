
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile("index.html");
});

// send the default array of dreams to the webpage
app.get("/registrar", (request, response) => {
  response.sendFile("./register.html");
});

app.get("/login", (request, response) => {
  response.sendFile("./login.html");
});

var http = require("https");
var ProxyAgent = require("proxy-agent");

// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.https_proxy || "https://ipofwebsite:port";

var opts = {
  method: "GET",
  host: "host",
  path: "path",
  // this is the important part!
  agent: new ProxyAgent(proxyUri)
};

// the rest works just like any other normal HTTP request
http.get(opts, onresponse);

function onresponse(res) {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
}

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Rodando na porta " + listener.address().port);
});
