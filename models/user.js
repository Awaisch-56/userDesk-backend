const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  phone: {
    type: String,
  },
  address: {
    street: { type: String,  },
    city: { type: String,  },
    state: { type: String,  },
    country: { type: String,  default: "Pakistan" },
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);
