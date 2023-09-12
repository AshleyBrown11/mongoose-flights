const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    username: String,
    email: String,
    // How to reference Flights in User Schema
    flights: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Flight',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;