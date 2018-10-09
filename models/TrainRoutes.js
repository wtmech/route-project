const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const RouteSchema = new Schema({
  trainLine: {
    type: String,
    required: true
  },
  runNumber: {
    type: String,
    required: true
  },
  routeName: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TrainRoutes = mongoose.model("routes", RouteSchema);
