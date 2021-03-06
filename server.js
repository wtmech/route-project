const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser"); //You need to use bodyParser() if you want the data to be available in req.body.

const trainRoutes = require("./routes/api/trainRoutes");

const app = express();

app.use(express.static(path.join(__dirname, "front/build")));

//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//Use Routes
app.use("/api/routes", trainRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/front/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
