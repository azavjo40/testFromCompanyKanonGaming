const { Router } = require("express");
const User = require("../models/user");
const fruitGames = require("../middleware/fruitGames");
const removeUser = require("../middleware/removeUser");
const userRegister = require("../middleware/userRegister");
const router = Router();
router.post("/user", async (req, res) => {
  try {
    const { name, moneys } = req.body;
    const { fruits, moneysUser } = fruitGames(moneys);
    if (!name) {
      res.status(300).json({ message: "Please Choose Name and Money" });
    } else {
      userRegister({ res, name, moneys: moneysUser, fruits });
    }
  } catch (e) {
    res.status(500).jsom({ message: "Something went wrong, please try again" });
  }
});

router.patch("/patch", removeUser, async (req, res) => {
  try {
    const { name, moneys, _id } = req.body;
    const { fruits, moneysUser } = await fruitGames(moneys);
    const update = {
      name,
      moneys: moneysUser,
      _id,
      fruits,
    };
    if (!_id) {
      userRegister({ res, name, moneys: moneysUser, fruits });
    } else {
      const user = await User.findByIdAndUpdate(
        { _id },
        { $set: update },
        { new: true }
      );
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(500).jsom({ message: "Something went wrong, please try again" });
  }
});
module.exports = router;
