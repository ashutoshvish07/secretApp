const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    secret: {
      type: String,
      required: [true, "Please enter the Product title"],
    },

    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
