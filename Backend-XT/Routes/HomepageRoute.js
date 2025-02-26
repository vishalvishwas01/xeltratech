const express = require("express");
const { addCards, getCards, addMoreWeCanCards, getWhatMoreCard } = require("../Controller/HomepageData");

const router = express.Router();

router.post("/add-cards", addCards); // Now accepts an array of card data
router.get("/get-cards", getCards);

router.post("/add-cards-whatmore", addMoreWeCanCards); // Now accepts an array of card data
router.get("/get-cards-whatmore", getWhatMoreCard);

module.exports = router;
