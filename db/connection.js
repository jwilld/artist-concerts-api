// we're importing mongoose from node_modules
import mongoose from "mongoose";

// using native ES6 Promises, in place of mongoose's deprecated mpromise library
// `Promise` will provides us with a couple methods: .then() for success,
// and .catch() for errors
mongoose.Promise = Promise;

// set the uri for connecting to our local mongodb
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/artist-concerts-api";
}

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log("Connection failed!", error));

// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration

export default mongoose;
