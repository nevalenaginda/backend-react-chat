const express = require("express");
const Router = express.Router();
const { findMessages, deleteHistory } = require("../controllers/chats");

Router.get("/api/chat/:idFrom/:idTo", findMessages).delete(
  "/api/chat/:id",
  deleteHistory
);

module.exports = Router;
