const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const { password: pwd, ...userWithoutPassword } = user.toObject();

  res.json({
    message: "Login successful",
    token,
    user: userWithoutPassword,
  });
};

exports.getProfile = (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
};
