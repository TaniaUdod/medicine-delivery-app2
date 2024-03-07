const { Schema, model } = require('mongoose');

const medicineSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'pharmacy',
    },
  },
  { versionKey: false, timestamps: true }
);

const Medicine = model('medicine', medicineSchema);

module.exports = Medicine;
