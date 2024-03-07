const express = require("express");
const { getAllMedicines } = require("../controllers/medicineController");

const medicineRouter = express.Router();

medicineRouter.get("/", getAllMedicines);

module.exports = medicineRouter;
