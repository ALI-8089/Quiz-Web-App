const mongoose = require('mongoose')
let USERCOLLECTION = new mongoose.Schema({
  questions: [
    {
      question: {
        type: String,
      },
      options: {
        type: Array,
        maxLength: 4,
      },
      correctAnswer: {
        type: String,
      },
    },
  ],
},{collection:"users"})
USERCOLLECTION= mongoose.model('users',USERCOLLECTION)
module.exports ={
    USERCOLLECTION
}