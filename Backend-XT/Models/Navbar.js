const mongoose = require("mongoose");

const NavbarSchema = new mongoose.Schema({
  menuItems: { type: [String], default: [] }, // Store menu items as an array
});

module.exports = mongoose.model("Navbar", NavbarSchema);
