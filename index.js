const express = require("express");
const phones = require("./data.json");
const cors = require("cors");
const app = express();
const port = 500;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Dev Town");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});
app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`server is running on : ${port}`);
});
