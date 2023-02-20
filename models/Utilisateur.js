const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: {type: String, required: true},
  prenom: {type: String, required: true},
  adresse: {type: String, required: true},
  telephone: {type: String, required: true},
  email: {type: String, required: true},
  username: {type: String, required: true},
  password: {type: String, required: true},
  role: {type: String, default: "user"}
});



module.exports = mongoose.model('Utilisateur', utilisateurSchema);