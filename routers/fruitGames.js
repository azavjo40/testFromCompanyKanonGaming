const { Router } = require("express");
const User = require("../models/user");
const fruitGames = require("../midlleware/fruitGames");
const router = Router();
router.post("/user", async (req, res) => {
  try {
    const { name, moneys } = req.body;
    const { fruits, moneysUser } = fruitGames(moneys);
    if (!name) {
      res.status(300).json({ message: "Please Choose Name and Money" });
    } else {
      const user = new User({ name, moneys: moneysUser, fruits });
      await user.save();
      res.status(201).json({
        message: "User created",
        userId: user.id,
        name,
        moneys: moneysUser,
        fruits,
      });
    }
  } catch (e) {
    res.status(500).jsom({ message: "Something went wrong, please try again" });
  }
});

router.patch("/patch", async (req, res) => {
  try {
    const { name, moneys, userId } = req.body;
    const { fruits, moneysUser } = await fruitGames(moneys);
    const update = {
      name,
      moneys: moneysUser,
      userId,
      fruits,
    };
    if (!name) {
      res.status(300).json({ message: "problem" });
    } else {
      const user = await User.findByIdAndUpdate(
        { _id: userId },
        { $set: update },
        { new: true }
      );
      res.status(200).json(user);
      console.log(user);
    }
  } catch (e) {
    res.status(500).jsom({ message: "Something went wrong, please try again" });
  }
});
module.exports = router;
