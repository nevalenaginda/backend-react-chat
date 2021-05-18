const socketio = require("socket.io");
const moment = require("moment");
moment.locale("id");

// Export Server Socket
module.exports = (server) => {
  // CORS SocketIO
  const io = socketio(server, {
    cors: {
      origin: "*",
    },
  });

  // socket io
  io.on("connection", (socket) => {
    //memanggil model user & chat
    const {
      mGetFriends,
      mPatchUser,
      mLogout,
      mSearchUser,
      mAddFriends,
      mDeleteFriends,
      mDetailUser,
    } = require("../models/users");
    const {
      mGetChat,
      mGetLastChat,
      mSendChat,
      mDetailChat,
      mDeleteChat,
      createChat,
      getMessageByIdSender,
    } = require("../models/chat");

    //kasih notif User ada Yang Online
    socket.on("connected", (data) => {
      const socketData = { socketId: socket.id };
      // Set Socket ID yang connect ke database
      mPatchUser(socketData, data.id)
        .then((res) => {
          console.log(`${data.username} is online on socket ${socket.id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    // Hapus SocketID yang logout yang bawah fungsi bawaan gak bisa dipanggil di frontend
    socket.on("disconnected", () => {
      mLogout(socket.id)
        .then((response) => {
          if (response.length > 0) {
            const socketData = {
              socketId: null,
            };
            mPatchUser(socketData, response[0].id);
            console.log(`${response[0].username} is disconnected`);
          } else {
            console.log("id not found");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });

    // Hapus SocketID yang disconnected
    socket.on("disconnect", () => {
      try {
        mLogout(socket.id)
          .then((response) => {
            if (response.length > 0) {
              const socketData = {
                socketId: null,
              };
              mPatchUser(socketData, response[0].id);
              console.log(`${response[0].username} is disconnected`);
            } else {
              console.log("id not found");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch {
        console.log("Server Side Error");
      }
    });

    // Login Kedalam room
    socket.on("join-room", (roomId) => {
      console.log(`Room ID ${roomId} joined`);
      socket.join(roomId);
    });

    // Pencarian Nama
    socket.on("search-name", (data) => {
      mSearchUser(data)
        .then((response) => {
          io.to(data.roomId).emit("res-search-name", response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    // Ambil Semua User (Soon diganti Friendlist)
    socket.on("get-list-users", (userId, roomId) => {
      mGetFriends(userId)
        .then((res) => {
          // console.log(`resource are sended to user RoomId : ${roomId}`)
          io.to(roomId).emit("res-get-list-users", res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    // Ambil List Chat
    socket.on("get-list-chat", (data) => {
      console.log("Fetching chat data From DB", data);
      mGetChat(data)
        .then((res) => {
          // Kirrim ke Room ID

          io.to(data.roomId).emit("res-get-list-chat", res);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    //Ambil last chat
    socket.on("get-last-chat", (data) => {
      console.log("Fetching data last chat From DB", data);
      mGetLastChat(data)
        .then((res) => {
          console.log("last chat", res);
          io.to(data.roomId).emit("res-get-last-chat", res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    // Kirim Pesan
    socket.on("send-message", (data) => {
      console.log("Sending chat data to DB");
      mSendChat(data)
        .then((res) => {
          mGetChat(data)
            .then((response) => {
              mDetailUser(data.targetId)
                .then((resTarget) => {
                  mDetailUser(data.senderId)
                    .then((resSender) => {
                      io.to(response[0].targetRoomId).emit(
                        "res-get-list-chat",
                        response
                      );
                      io.to(response[0].senderRoomId).emit(
                        "res-target-data",
                        resTarget[0]
                      );
                      console.log("roomid target", resTarget[0].roomId);
                      io.to(resTarget[0].roomId).emit("res-new-chat", {
                        data: "New Message",
                        from: resSender[0].name,
                        message: data.msg,
                      });
                      io.to(response[0].senderRoomId).emit(
                        "res-get-list-chat",
                        response
                      );
                    })
                    .catch((err) => {
                      // Error dari Sender
                      console.log(err);
                    });
                })
                // Error dari target
                .catch((err) => {
                  console.log(err);
                });
            })
            // Error cari History Chat
            .catch((err) => {
              console.log(err);
            });
        })
        // Error kirim pesan
        .catch((err) => {
          console.log(err);
        });
    });

    socket.on("sendMessage", async (data, callback) => {
      console.log("send Message", data);
      const date = new Date();
      const dayNow = moment(date).format("dddd");
      const timeNow = moment(date).format("LT");
      const dateNow = moment(date).format("LL");
      const dataMessage = {
        ...data,
        time: timeNow,
        day: dayNow,
        date: dateNow,
      };
      // console.log(dataMessage);
      const send = {
        senderId: dataMessage.senderId,
        targetId: dataMessage.targetId,
        message: dataMessage.message,
        type: "send",
        time: `${dataMessage.day}. ${dataMessage.time}`,
        date: dateNow,
      };
      const receiver = {
        senderId: dataMessage.targetId,
        targetId: dataMessage.senderId,
        message: dataMessage.message,
        type: "receive",
        time: `${dataMessage.day}. ${dataMessage.time}`,
        date: dateNow,
      };
      await createChat(send);
      await createChat(receiver);
      const getMessagesIdFrom = await getMessageByIdSender(data.senderId);
      const getMessagesIdTo = await getMessageByIdSender(data.targetId);
      const result = [...getMessagesIdFrom, ...getMessagesIdTo];
      const dataSender = await mDetailUser(data.senderId);
      const dataTarget = await mDetailUser(data.targetId);
      // const result = getMessagesIdFrom;
      io.to(dataTarget[0].roomId).emit("res-new-chat", {
        data: "New Message",
        from: dataSender[0].name,
        fromId: dataSender[0].id,
        message: data.message,
      });
      io.to(dataTarget[0].roomId).emit("receiverMessage", result);
      callback(result);
    });

    // Hapus Chat
    socket.on("delete-chat", (data) => {
      //console.log('menjalankan delete chat ', data)
      mDeleteChat(data.id)
        .then((res1) => {
          mGetChat(data)
            .then((response) => {
              mDetailUser(data.targetId)
                .then((resTarget) => {
                  mDetailUser(data.senderId)
                    .then((resSender) => {
                      //console.log('ini jalan gak', resTarget[0])
                      io.to(resTarget[0].roomId).emit(
                        "res-get-list-chat",
                        response
                      );
                      io.to(resSender[0].roomId).emit(
                        "res-get-list-chat",
                        response
                      );
                      io.to(resSender[0].roomId).emit(
                        "res-delete-chat",
                        "Sucess delete chat."
                      );
                    })
                    .catch((err) => {
                      // Error dari Sender
                      console.log(err);
                    });
                })
                // Error dari target
                .catch((err) => {
                  console.log(err);
                });
            })
            // Error cari History Chat
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};
