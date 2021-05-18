const express = require("express");
const morgan = require("morgan");

const socket = require("./src/socket/socket");
const http = require("http");

const app = express();
const cors = require("cors");

const userRoute = require("./src/routes/users");
const chatRoute = require("./src/routes/chats");
const { PORT } = require("./src/helpers/env");

const httpServer = http.createServer(app);
socket(httpServer);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

//user route
app.use(userRoute);
app.use(chatRoute);
// open route for public image
app.use("/images", express.static("./public/images"));

httpServer.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
