const express = require("express");

// --> initializing the router as "router" hence router.get
const router = express.Router();

// --> destruction all of the functions to obtain different routes fron the "flightController"
const { getAllFlights, frame } = require("../controllers/flightController");

router.get("/", getAllFlights);

module.exports = router;
