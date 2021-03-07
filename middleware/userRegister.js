const User = require("../models/user");
module.exports = async ({ res, name, moneys: moneysUser, fruits }) => {
  try {
    const user = new User({ name, moneys: moneysUser, fruits });
    await user.save();
    res.status(201).json({
      message: "User created",
      _id: user.id,
      name,
      moneys: moneysUser,
      fruits,
    });
  } catch (e) {
    console.log(e);
  }
};
