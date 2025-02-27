const Navbar = require("../Models/Navbar");

exports.addMenu = async (req, res) => {
  try {
    const { menuItem } = req.body;

    if (!menuItem || !Array.isArray(menuItem)) {
      return res.status(400).json({ error: "menuItem must be an array" });
    }

    let navbar = await Navbar.findOne(); // Check if a menu document exists

    if (navbar) {
      // If exists, update the array by adding new items
      navbar.menuItems.push(...menuItem);
      await navbar.save();
    } else {
      // If no document exists, create a new one
      navbar = new Navbar({ menuItem });
      await navbar.save();
    }

    res.json({ message: "Menu items added successfully", menuItem: navbar.menuItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get menu items (Pull)
exports.getMenuItems = async (req, res) => {
  try {
    const navbar = await Navbar.findOne();
    
    if (!navbar) {
      return res.json({ menuItems: [] });
    }

    res.json({ menuItems: navbar.menuItems });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving menu items", details: error });
  }
};
