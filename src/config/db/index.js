const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb+srv://transon:transon@cluster0.5iiqttn.mongodb.net/toys', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect successfully!!!');
    }
    catch (error) {
        console.log('Connect failure!!!');
    }

}

module.exports = {connect};