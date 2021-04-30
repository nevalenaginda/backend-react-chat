const express = require("express");
const morgan = require("morgan");

const socket = require("socket.io");
const http = require("http");
const moment = require("moment");
moment.locale("id");

const app = express();
const cors = require("cors");

const userRoute = require("./src/routes/users");
const { PORT } = require("./src/helpers/env");

const httpServer = http.createServer(app);
const io = socket(httpServer, {
  cors: {
    origin: "*",
  },
});

// socket io
io.on("connection", (socket) => {
  console.log("client terhubung dengan id " + socket.id);

  socket.on("initialUserLogin", (idUser) => {
    console.log(`user:${idUser}`);
    socket.join(`user:${idUser}`);
  });

  socket.on("sendMessage", (data, callback) => {
    // messageModels.insetMessage(data)
    const date = new Date();
    const timeNow = moment(date).format("LT");
    const dataMessage = { ...data, time: timeNow };
    io.to(`user:${data.receiverId}`).emit("receiverMessage", dataMessage);
    callback(dataMessage);
  });

  socket.on("leftRoom", ({ username, namaRoom }) => {
    const date = new Date();
    const timeNow = moment(date).format("LT");
    const dataMessage = {
      username: "admin",
      message: `${username} telah meniggal group`,
      time: timeNow,
    };
    io.to(`room:${namaRoom}`).emit("receiverMessage", dataMessage);
  });

  socket.on("disconnect", (reason) => {
    console.log("client disconnect zzzzzzzzzzzzz " + reason);
  });
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

//user route
app.use(userRoute);
// open route for public image
app.use("/images", express.static("./public/images"));

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
