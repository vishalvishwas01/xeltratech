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

const WhatMoreCard = mongoose.model("WhatMoreCard", cardSchema);

module.exports = WhatMoreCard;
