require("dotenv").config();
const cors = require("cors");

const { database_Connect } = require("./database/database_Connect");
const all_Routes = require("./routes/index");

const express = require("express");

const app = express();

let corsOption = {
  origin: "https://server-production-a485.up.railway.app",
  methods: "GET,POST",
  credentials: true,
};

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.use(cors(corsOption));

app.use(express.json());

database_Connect();

app.use(all_Routes);

app.listen(process.env.PORT, () => {
  console.log("server is runnung", process.env.PORT);
});
