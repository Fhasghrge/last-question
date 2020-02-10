const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itcast')
const Schema = mongoose.Schema

let studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0,1], // 枚举必须是其中一个
    default: 0
  },
  age: {
    type: Number,
  },
  hobbies: {
    type: String
  }
})
module.exports = mongoose.model('Student', studentSchema)