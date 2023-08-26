const express = require("express");
const router = express.Router();
const {getAllProducts, 
    getAllProductsTesting
}= require("../controllers/product");




router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);

module.exports = router;
janak how are you



//===================================================//
// ===================================================//
Rohit Sharma is a prominent Indian cricketer and a well-known name in international cricket. 
As of my last knowledge update in September 2021, here's some information about him