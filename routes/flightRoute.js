const express = require("express");

// --> initializing the router as "router" hence router.get
const router = express.Router();

// --> destruction all of the functions to obtain different routes fron the "flightController"
const {
	getAllFlights,
	AddFlight,
	GetSingleFlight,
	DeleteFlight,
} = require("../controllers/flightController");

// --> getting all flights
router.get("/", getAllFlights);

// --> Adding/Booking a Flight
router.post("/", AddFlight);

// --> Getting individual flight by id
router.get("/:id", GetSingleFlight);

// --> route for deleting flight
router.delete("/:id", DeleteFlight);

module.exports = router;
