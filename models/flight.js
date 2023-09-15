const { Schema, model } = require('mongoose');

const destinationSchema = new Schema(
  {
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },

    arrival: {
        type: Date,
  }
}
)

const flightSchema = new Schema(
  {
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
    },

    flightNo: { 
        type: Number,
        min: 10,
        max: 9999,
        require:true 
    },
    departs: {
        type: Date,
        default: () => Date.now()+ (3652460601000)
  },
    airport:{ String, 
    } ,
    destinations: [destinationSchema]
}
);

const Flight = model('Flight', flightSchema);

module.exports = Flight;