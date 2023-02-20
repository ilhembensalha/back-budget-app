const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({

  day: {type: Date, default: Date.now},
  montant: {type: String, required: true},
  descriptions: {type: String, required: true},
  type: {type: String, required: true},
 // idcat:{type: String, required: true},
 // idutilisateur:{type: String, required: true}
});

module.exports = mongoose.model('Transaction', transactionSchema);