// const mongoose = require('mongoose');
// module.exports = async function (key) {
//   try {
//     const conn = await mongoose.connect(key, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false
//     });
//     console.log(`Database Connected (${conn.connection.name}): ${conn.connection.host}`);
//   } catch (e) {
//     console.log(e);
//   }
// };





// const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);

// // connect to database
// mongoose.connect("mongodb://127.0.0.1/E-Commerce", { useNewUrlParser: true });
// // mongodb+srv://ranjandibya:lalu@cluster0.owtudao.mongodb.net/?retryWrites=true&w=majority

// const db = mongoose.connection;

// //not connect
// db.on("error", console.error.bind(console, "Not connect to MongoDb  Try again"));

// // if connection is successful
// db.once("open", () => {
//   console.log("Connected with Data-base succsesfully");
// });

// module.exports = db;


const mongoose = require('mongoose');
const uri = 'mongodb+srv://ranjandibya34512:lalu@cluster0.tsbr7ye.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Additional code
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });