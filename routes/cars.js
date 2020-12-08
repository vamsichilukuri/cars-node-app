const router = require("express").Router();
const { getAllCars, getCarById } = require("../controller/cars");

router.get("/cars", getAllCars);
router.get("/cars/:id", getCarById);

module.exports = router;
