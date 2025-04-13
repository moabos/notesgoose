require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 5173;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(expressLayouts);
app.set("layout", "layouts/main");
app.set("view engine", "ejs");

app.use("/", require("./server/routes/index"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
