const date = new Date().toLocaleDateString();

const time = new Date().toLocaleTimeString();

const flights = [
	{
		title: "flight to Canada",
		time,
		price: new Intl.NumberFormat("en-us", {
			style: "currency",
			currency: "NGN",
		}).format(26000),
		date,
	},
	{
		title: "flight to Nigeria",
		time,
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

exports.frame = "good food";
