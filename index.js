const express = require("express");

// --> similar to the bodyParser
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();

// --> similar to app.use(bodyParser.json())
app.use(json());

//use the app.use() below to set the starting path for all the flight routes. we want to run the routes present in te flightRoute file when the users visit "/flights" i.e all the routes in our server are going to start from "/flights"
app.use("/flights", routes);

app.get("/", (req, res) => {
	console.log("This is due to the get request");
	res.send("Hello from the other side");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
