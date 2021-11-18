import express from "express";
import cors from "cors";

import notes from "./api/notes.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user/:id", notes);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
