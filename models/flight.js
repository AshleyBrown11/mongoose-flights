const { Schema, model } = require('mongoose');

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Spirit'],
    
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
  airport: {
    type: String,
    enum:['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
  },
  destinations: {
    type: [Schema.Types.ObjectID], ref: 'Destination',
  }
});


const Flight = model("Flight", flightSchema);
module.exports = Flight;
