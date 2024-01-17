const asyncHandler = require("express-async-handler");
const Product = require("../models/secretModel");

exports.createProduct = asyncHandler(async (req, res) => {
  const { secret } = req.body;
  const userId = req.user.id;
  const existingSecret = await Product.findOne({ user: userId });
  if (existingSecret) {
    return res.status(400).json({ message: "You Already Shared Secret" });
  }
  const secretMessage = await Product.create({
    secret,
    user: req.user.id,
  });

  if (secretMessage) {
    res
      .status(201)
      .json({ message: "Secret Message Created successfully", secretMessage });
  }
});

exports.getSecrets = asyncHandler(async (req, res) => {
  const secrets = await Product.find();
  res
    .status(200)
    .json({ message: "All Secrets retrieved successfully", secrets });
});
