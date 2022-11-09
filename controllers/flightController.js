const date = new Date().toLocaleDateString();

let flights = [
	{
		title: "flight to Canada",
		time: "2pm",
		price: new Intl.NumberFormat("en-us", {
			style: "currency",
			currency: "NGN",
		}).format(26000),
		date,
	},
	{
		title: "flight to Nigeria",
		time: "2am",
		price: new Intl.NumberFormat("en-us", {
			style: "currency",
			currency: "NGN",
		}).format(56000),
		date,
	},
];

exports.getAllFlights = (req, res) => {
	console.log("The get all flights route was visited");
	res.send(flights);
};

exports.AddFlight = (req, res) => {
	// console.log("A flight was booked");
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
		},
	];

	// console.log(title);
	res.send(`The flight with title: ${title} was successfully booked!!`);
};
