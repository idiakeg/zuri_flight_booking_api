const { v4: uuidv4 } = require("uuid");

const date = new Date().toLocaleDateString();

let flights = [];

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
	const { id } = req.params;

	flights = flights.filter((flight) => flight.id !== id);
	res.send(`user with the id: ${id} has been deleted from the database`);
};
