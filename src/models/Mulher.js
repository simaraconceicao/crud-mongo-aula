const mongoose = require('mongoose')

const MulherSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    required: true
  }, 
  citacao: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('mulher', MulherSchema)