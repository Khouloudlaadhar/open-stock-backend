const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    ref: {
        type: String,
        required: true
    },
    designation: String,
    photo: String,
    price: {
        type: Number,
        required: true
    },
    qteStock:{
        type: Number,
        required: true
    },
    fournisseur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fournisseur'
    }
})

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
