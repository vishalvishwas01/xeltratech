const express = require("express");
const { addMenu, getMenuItems } = require("../Controller/Navbar.js");
const { verifyToken } = require("../Middleware/authMiddleware.js");

const router = express.Router();

router.post("/add-menu",verifyToken, addMenu);  // Add menu item
router.get("/pull-menu", getMenuItems); // Retrieve menu items

module.exports = router;
