const Pharmacy = require('../models/pharmacy.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const getPharmacies = async (req, res, next) => {
  const result = await Pharmacy.find();
  res.status(200).json({ result });
};

module.exports = { getPharmacies: ctrlWrapper(getPharmacies) };
