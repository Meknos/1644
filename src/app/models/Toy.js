const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Toy = new Schema({
    name: { type: String},
    price: { type: String},
    quantity: { type: Number},
    description: { type: String},
    image: { type: String},
    slug: { type: String, slug: 'name', unique: true}
});

module.exports = mongoose.model('Toy', Toy);