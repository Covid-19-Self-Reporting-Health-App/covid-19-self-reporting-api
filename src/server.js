// server.js
const express = require("express");
const app = express();
const redisClient = require("./redis-client");

app.get("/", (req, res) => {
  return res.send("Hello bitch!");
});

app.get("/store/:key", async ({ params: { key }, query }, res, next) => {
  try {
    await redisClient.setAsync(key, JSON.stringify(query));
    return res.send("success");
    // return res.status(200).json(JSON.parse(success));
  } catch (e) {
    console.error(e);
  }
});

app.get("/:key", async ({ params: { key } }, res, next) => {
  try {
    const success = await redisClient.getAsync(key);
    return res.status(200).json(JSON.parse(success));
  } catch (e) {
    console.error(e);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
