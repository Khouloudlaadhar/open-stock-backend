const mongoose = require('mongoose');

const fournisseurSchema = new mongoose.Schema({
    identifiant: {
        type: Number,
        required: true
    },
    raisonsocial:{
        type:String,
        required: true
    } ,
    phone:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
  
})

const Fournisseur = mongoose.model('Fournisseur', fournisseurSchema);

module.exports = Fournisseur;