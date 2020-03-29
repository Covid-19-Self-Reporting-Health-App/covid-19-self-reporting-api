// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const redisClient = require("./redis-client");

// parse url-encoded query strings
app.use(bodyParser.urlencoded({ extended: false }));

// parse json bodies
app.use(bodyParser.json());

app.use("/api", require("./api"));

app.get("/", (req, res) => {
  return res.send("Hello bitch!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
