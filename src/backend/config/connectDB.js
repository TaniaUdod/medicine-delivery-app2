const { connect } = require('mongoose');

const DB_HOST =
  'mongodb+srv://tania:kl7e0SJj64izqj83@cluster1.efqhvs1.mongodb.net/medicine_delivery?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    const db = await connect(DB_HOST);
    console.log('Database connection successful');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
