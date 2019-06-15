const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  shelter: {
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  },
  pet_type: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  description: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Pet = mongoose.model('pet', PetSchema);