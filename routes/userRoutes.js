const express = require("express");
const {registerUser, loginUser } =require("../controllers/auth")
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();
// const {
//   registerUser,
//   currentUser,
//   loginUser,
// } = require("../controllers/userController");
// router.post("/register", registerUser);
// router.post("/login", loginUser);
//router.get("/current", validateToken, currentUser);

router.post("/register", registerUser);
router.post("/login", loginUser);


module.exports = router;
