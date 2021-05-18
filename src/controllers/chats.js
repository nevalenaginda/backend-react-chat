const { getMessageByIdSender, mDeleteChat } = require("../models/chat");
const { success, failed, notFound } = require("../helpers/response");
module.exports = {
  findMessages: async (req, res) => {
    const { idFrom, idTo } = req.params;
    try {
      const getMessagesSender = await getMessageByIdSender(idFrom);
      const getMessagesTarget = await getMessageByIdSender(idTo);
      const result = [...getMessagesSender, ...getMessagesTarget];
      success(res, result, {}, "Find messages successfully");
    } catch (err) {
      failed(res, "Internal server error", err);
    }
  },
  deleteHistory: (req, res) => {
    try {
      const id = req.params.id;
      mDeleteChat(id)
        .then((response) => {
          if (response.affectedRows != 0) {
            // Kalau ada yang terhapus
            success(res, response, {}, "Success Delete Message");
          } else {
            // Kalau tidak ada yang terhapus
            notFound(res, "Nothing Deleted, Wrong IDs", {});
          }
        })
        .catch((err) => {
          // Kalau ada salah di parameternya
          notFound(res, "Wrong Parameter Type", {});
        });
    } catch (err) {
      console.log(err);
      // Kalau ada salah lainnya
      failed(res, "Internal server error", {});
    }
  },
};
