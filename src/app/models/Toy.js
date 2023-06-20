const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Toy = new Schema({
    name: { type: String},
    price: { type: String},
    quantity: { type: Number},
    descriptopn: { type: String},
    image: { type: String},
});

module.exports = mongoose.model('Toy', Toy);