const express = require("express");
const { getPharmacies } = require("../controllers/pharmacyController");

const pharmacyRouter = express.Router();

pharmacyRouter.get(
  "https://medicine-delivery-app2.onrender.com/",
  getPharmacies
);

module.exports = pharmacyRouter;
