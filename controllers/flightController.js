const { v4: uuidv4 } = require("uuid");

const date = new Date().toLocaleDateString();

let { flightsContainer: flights } = require("../models/Flight");

exports.getAllFlights = (req, res) => {
	res.send(flights);
};

exports.AddFlight = (req, res) => {
	const { title, time, price, date } = req.body;
	let newTime = time.charAt(0);
	console.log(newTime);

	flights = [
		...flights,
		{
			title,
			time,
			price: new Intl.NumberFormat("en-us", {
				style: "currency",
				currency: "NGN",
			}).format(price),
			date: new Date(date).toLocaleDateString(),
			id: uuidv4(),
		},
	];

	res.send(`The flight with title: ${title} was successfully booked!!`);
};

exports.GetSingleFlight = (req, res) => {
	const { id } = req.params;

	const singleFLight = flights.find((flight) => flight.id === id);
	res.send(singleFLight);
};

exports.DeleteFlight = (req, res) => {
	// obtain the id of the flight to be deleted
	const { id } = req.params;

	// deleted the flight with requested id
	flights = flights.filter((flight) => flight.id !== id);

	// inform the user that said flight has been deleted
	res.send(`user with the id: ${id} has been deleted from the database`);
};

exports.UpdateFlight = (req, res) => {
	// obtain the id to be updated
	const { id } = req.params;

	// find the flight with requested id
	const flightToBeUpdated = flights.find((flight) => flight.id === id);

	//  Obtain the details of the flight to be updated
	const { title, time, price, date } = req.body;

	// if any if the afforementioned properties of the flight was updated, the change should be reflected
	if (title) flightToBeUpdated.title = title;
	if (time) flightToBeUpdated.time = time;
	if (price) {
		flightToBeUpdated.price = new Intl.NumberFormat("en-us", {
			style: "currency",
			currency: "NGN",
		}).format(price);
	}
	if (date) flightToBeUpdated.date = new Date(date).toLocaleDateString();

	res.send(`flight with id: ${id} has been updated`);
};
