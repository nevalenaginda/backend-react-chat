const connection = require("../configs/db");

module.exports = {
  mGetChat: (data) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT chat.senderId as senderId, chat.id as id, chat.created_at as created_at, target.socketId as socketId, chat.targetId as targetId, chat.message as message, sender.name as senderName, sender.roomId as senderRoomId, target.roomId as targetRoomId FROM chat LEFT JOIN users as sender ON chat.senderId=sender.id LEFT JOIN users as target ON chat.targetId = target.id
            WHERE 
            (senderId='${data.senderId}' AND targetId='${data.targetId}' AND chat.isActive = 1) 
            OR 
            (senderId='${data.targetId}' AND targetId='${data.senderId}' AND chat.isActive = 1)`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  mGetLastChat: (data) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT chat.senderId as senderId, chat.id as id, chat.created_at as created_at, target.socketId as socketId, chat.targetId as targetId, chat.message as message, sender.name as senderName, sender.roomId as senderRoomId, target.roomId as targetRoomId FROM chat LEFT JOIN users as sender ON chat.senderId=sender.id LEFT JOIN users as target ON chat.targetId = target.id
            WHERE 
            ((senderId='${data.senderId}' AND targetId='${data.targetId}' AND chat.isActive = 1) 
            OR 
            (senderId='${data.targetId}' AND targetId='${data.senderId}' AND chat.isActive = 1)) ORDER BY chat.created_at  DESC LIMIT 1`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  mDetailChat: (id) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM chat WHERE id = ${id}`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  mSendChat: (data) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO chat (senderId, targetId, message) VALUES  (${data.senderId},${data.targetId},'${data.msg}')`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  mDeleteChat: (id) => {
    return new Promise((resolve, rejet) => {
      const sql = `DELETE FROM chat WHERE id = ${id}`;
      connection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  createChat: (data) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO chat SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          console.log(err);
          reject(new Error("Internal server error"));
        }
      });
    });
  },
  getMessageByIdSender: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM chat WHERE senderId = ?",
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
  },
  getMessageByIdtarget: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM chat WHERE targetId = ?",
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
  },
  findUsers: (idFrom) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * from users WHERE id = ?",
        idFrom,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
  },
  findReceivers: (idTo) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM users WHERE id =${idTo}`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error("Internal server error"));
          }
        }
      );
    });
  },
};
