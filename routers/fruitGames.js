const { Router } = require("express");
const User = require("../models/user");
const fruitGames = require("../midlleware/fruitGames");
const router = Router();
router.post("/user", async (req, res) => {
  try {
    const { fruits, moneys } = fruitGames();
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
      res.status(300).json({ message: "Please Choose Name and Money" });
    } else {
      const user = new User({ name, moneys });
      await user.save();
      res.status(201).json({
        message: "User created",
        userId: user.id,
        name,
        moneys,
        fruits,
      });
    }
  } catch (e) {
    res.status(500).jsom({ message: "Something went wrong, please try again" });
  }
});
module.exports = router;
