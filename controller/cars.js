var fs = require("fs");

// Get All Cars
const getAllCars = (req, res) => {
	fs.readFile(__dirname + "/" + "cars.json", "utf8", function (err, data) {
		let cars = JSON.parse(data);
		cars = cars.cars;
		res.render("cars", { data: cars });
	});
};

// Get Car by ID
const getCarById = (req, res) => {
	fs.readFile(__dirname + "/" + "cars.json", "utf8", function (err, data) {
		let cars = JSON.parse(data);
		cars = cars.cars;
		cars.filter((car) => {
			if (car.id == req.params.id) {
				res.render("car", { data: car });
			}
		});
	});
};

module.exports = { getAllCars, getCarById };
