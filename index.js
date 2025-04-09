import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Home Route is working fine");
});

app.get("/health", (req, res) => {
  res.send("Health Route is working fine");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
