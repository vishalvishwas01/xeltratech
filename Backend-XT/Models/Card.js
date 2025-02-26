const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  cards: [
    {
      title: { type: String, required: true },
      category: { type: String, required: true },
      description: { type: String, required: true }
    }
  ]
}, { timestamps: true });

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
