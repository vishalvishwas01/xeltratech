const Card = require("../models/Card");
const WhatMoreCard = require("../Models/WhatMoreCard");

// Controller to add multiple cards at once
exports.addCards = async (req, res) => {
    try {
      console.log("Received body:", req.body); // Debugging log
  
      const { cards } = req.body;
  
      if (!cards || !Array.isArray(cards) || cards.length === 0) {
        return res.status(400).json({ success: false, message: "Invalid card data" });
      }
  
      const newCardEntry = new Card({ cards });
      await newCardEntry.save();
  
      res.status(201).json({ success: true, message: "Cards added successfully", data: newCardEntry });
    } catch (error) {
      console.error("Error saving cards:", error); // Debugging log
      res.status(500).json({ success: false, message: "Error adding cards", error: error.message });
    }
  };

// Controller to get all card data
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json({ success: true, data: cards });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching cards", error: error.message });
  }
};


//more we can do card
exports.addMoreWeCanCards = async (req, res) => {
  try {
    const {cards} = req.body; // Expecting an array of card objects
    if (!Array.isArray(cards) || cards.length === 0) {
      return res.status(400).json({ success: false, message: "Invalid card data" });
    }

    const newCardEntry = new WhatMoreCard({ cards });
    await newCardEntry.save();
    res.status(201).json({ success: true, message: "Cards added successfully", data: newCardEntry });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding cards", error: error.message });
  }
};

// Controller to get all card data
exports.getWhatMoreCard = async (req, res) => {
  try {
    const cards = await WhatMoreCard.find();
    res.status(200).json({ success: true, data: cards });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching cards", error: error.message });
  }
};
