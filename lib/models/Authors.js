const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({
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
authorSchema.virtual('authors', {
  ref: 'Title',
  localField: '_id',
  foreignField: 'authorId'
});
// schema.statics.mostBooks = function(count = 10) {
//   return this 
//     .aggregate([
//       {
//         '$lookup': {
//           'from': 'authors',
//           'localField': '_id',
//           'foreignField':'authorId',
//           'as':'authors'
//         }
//       }, {
//         '$project': {
//           '_id': true,
//           'name': true,
//           'totalBooks': {
//             '$size': '$books'
//           }
//         }
//       }, {
//         '$sort': {
//           'totalBooks': -1
//         }
//       }, {
//         '$limit': count
//       }
//     ]);
// };
module.exports = mongoose.model('Authors', authorSchema);
