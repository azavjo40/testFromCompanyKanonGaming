//@ts-check
const User = require("../models/user");

module.exports = (req, res, next) => {
  try {
    const { _id } = req.body;
    console.log(_id);
    //   const stop = timeOut();
    //   const restartTimeOut = () => {
    //     clearTimeout(stop);
    //   };
    //   //   restartTimeOut();
    //   function timeOut() {
    //     return setTimeout(() => {
    //       console.log("remove");
    //     }, 1000);
    //   }
    //   timeOut();
  } catch (e) {
    console.log(e);
  }

  next();
};
