//@ts-check
const User = require("../models/user");

module.exports = (req, res, next) => {
  try {
    const { _id } = req.body;
    if (_id) {
      setTimeout(() => User.remove({ _id }), 1200000);
    }
  } catch (e) {
    console.log(e);
  }
  next();
};
