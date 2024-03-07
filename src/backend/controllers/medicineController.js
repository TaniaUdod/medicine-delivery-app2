const Medicine = require('../models/medicine.js');
const ctrlWrapper = require('../helpers/ctrlWrapper.js');

const getAllMedicines = async (req, res) => {
  const result = await Medicine.find().populate('owner');
  res.status(200).json({ result });
};

module.exports = {
  getAllMedicines: ctrlWrapper(getAllMedicines),
};
