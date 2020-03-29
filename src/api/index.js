const router = require("express").Router();
module.exports = router;

router.use("/daily", require("./daily"));
router.use("/history", require("./history"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
