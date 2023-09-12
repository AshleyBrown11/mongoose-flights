const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      return new Date().setFullYear(new Date().getFullYear() + 1);
    },
  },
});


const Flight = model("Flight", flightSchema);
module.exports = Flight;
