const jwt = require("jsonwebtoken");
const { failed } = require("../response");
module.exports = {
  authentication: (req, res, next) => {
    const token = req.headers.token;
    // const token = req.cookies.token;
    // console.log(token);

    if (!token) {
      //   console.log(token);
      failed(res, "Login required", {});
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          failed(res, "Invalid token", err);
        } else {
          res.userAccess = decoded.access;
          req.email = decoded.email;
          req.id = decoded.id;
          next();
        }
      });
    }
  },
};
