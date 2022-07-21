require("dotenv").config();

const PORT = 3000;
const express = require("express");
const server = express();
const apiRouter = require("./api");
const morgan = require("morgan");
const { client } = require("./db");
client.connect();

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// server.use((req, res, next) => {
//   console.log("<____Body LoggerSTART____>");
//   console.log(req.body);
//   console.log("<____Body LoggerEND____>");
// });
server.use("/api", apiRouter);
server.use(morgan("dev"));
server.use(express.json());
