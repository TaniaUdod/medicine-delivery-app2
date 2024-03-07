const express = require("express");
const { addOrder } = require("../controllers/orderController");

const orderRouter = express.Router();

orderRouter.post("https://medicine-delivery-app2.onrender.com/", addOrder);

module.exports = orderRouter;
