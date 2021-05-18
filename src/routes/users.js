const express = require("express");
const Router = express.Router();

const {
  register,
  activation,
  login,
  detailUser,
  detailUserByToken,
  listUser,
  updateUser,
  forgotPassword,
  resetPassword,
  changePassword,
  searchUser,
} = require("../controllers/users");
const { authentication } = require("../helpers/middleware/auth");
const singleUpload = require("../helpers/middleware/upload");

Router.post("/api/register", register)
  .get("/api/activate/:token/:email", activation)
  .get("/api/resetPassword/:token/:email/:password", resetPassword)
  .get("/api/user/:id", authentication, detailUser)
  .get("/api/profile", authentication, detailUserByToken)
  .get("/api/allUser/:id", authentication, listUser)
  .get("/api/searchUser", searchUser)
  .post("/api/login", login)
  .post("/api/forgotPassword", forgotPassword)
  .patch("/api/changePassword/:id", authentication, changePassword)
  .patch("/api/user/:id", authentication, singleUpload, updateUser);

module.exports = Router;
