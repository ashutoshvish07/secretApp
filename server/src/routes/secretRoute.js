const express = require("express");
const { createProduct } = require("../controller/secretController");
const{getSecrets} = require("../controller/secretController");;
const { protect } = require("../middleware/Authmiddleware");

const router = express.Router();

router.route("/create-secret").post(protect,createProduct);
router.route("/get-secrets").get(getSecrets);
module.exports = router;