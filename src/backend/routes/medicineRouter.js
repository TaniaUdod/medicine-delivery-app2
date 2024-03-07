const express = require("express");
const { getAllMedicines } = require("../controllers/medicineController");

const medicineRouter = express.Router();

medicineRouter.get(
  "https://medicine-delivery-app2.onrender.com/",
  getAllMedicines
);

module.exports = medicineRouter;
