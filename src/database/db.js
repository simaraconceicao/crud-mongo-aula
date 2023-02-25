const mongoose = require('mongoose')
mongoose.set("strictQuery", true)
require('dotenv').config()

const connectDatabase = () => {
  console.log('Connecting to the database')

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDb Atlas connected'))
    .catch((error) => console.log(error))
}

module.exports = connectDatabase
