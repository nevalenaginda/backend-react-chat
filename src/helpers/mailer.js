const nodemailer = require("nodemailer");
const { URL_BACKEND, EMAIL, EMAIL_PASS } = require("../helpers/env");
const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  service: "Gmail",
  auth: {
    user: EMAIL, // generated ethereal user
    pass: EMAIL_PASS, // generated ethereal password
  },
});

const register = (email, user, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let info = await transporter.sendMail({
        from: EMAIL, // sender address
        to: email, // list of receivers
        subject: "Account Verification", // Subject line
        html: `Hello ${user},<br> Please Click this link to verify your email.<br><a href=${URL_BACKEND}/register/activate?token=${token}&email=${email}>Click here to verify</a>`,
      });
      resolve(info);
    } catch (error) {
      console.log(error);
      reject(new Error(error));
    }
  });
};

const forgotPassword = (email, user, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let info = await transporter.sendMail({
        from: EMAIL, // sender address
        to: email, // list of receivers
        subject: "Reset Password", // Subject line
        html: `Hello ${user},<br> Please Click this link to reset your password.<br><a href=${URL_BACKEND}/forgot-password/activate?token=${token}&email=${email}>Click here to verify</a>`,
      });
      resolve(info);
    } catch (error) {
      console.log(error);
      reject(new Error(error));
    }
  });
};

module.exports = {
  register,
  forgotPassword,
};
