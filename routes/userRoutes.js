const express = require("express");
const { loginUser, getProfile } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

module.exports = router;
