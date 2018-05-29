'use strict';
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true }, 
  // memoryValue: { type: Number, default: 1 } 
});

questionSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

// const Question = mongoose.model('Question', questionSchema);

module.exports = mongoose.model('Question', questionSchema);