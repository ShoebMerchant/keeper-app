import app from "./server.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = process.env.PORT || 8000;

// Access to our mongoClient from MongoDb
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/Keeper";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
