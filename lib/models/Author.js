const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    } 
  }  
});
schema.virtual('books', {
  ref: 'Books',
  localField: '_id',
  foreignField: 'bookId'
});

module.exports = mongoose.model('Author', schema);
