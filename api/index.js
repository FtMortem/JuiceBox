const express = require("express");
const apiRouter = express.Router();

const usersRouter = require("./users");
const tagsRouter = require("./tags");
apiRouter.use("/users", usersRouter);
apiRouter.use("/tags", tagsRouter);

module.exports = apiRouter;
