// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json

const express = require("express");
const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("./"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile("index.html");
});

// send the default array of dreams to the webpage
app.get("/registrar", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.sendFile("./register.html");
});

app.get("/login", (request, response) => {
  response.sendFile("./login.html");
});

var http = require("https");
var ProxyAgent = require("proxy-agent");

// HTTP, HTTPS, or SOCKS proxy to use
var proxyUri = process.env.https_proxy || "https://52.72.251.198:3000";

var opts = {
  method: "POST",
  host: ".net",
  path: "./",
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
