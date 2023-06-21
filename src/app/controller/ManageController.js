const Toy = require('../models/Toy');
const { multipleMongooseToObject } = require('../../util/mongoose');

class ManageController{


    // [GET] /manage/stored/toys
    storedToys(req, res, next){
        Toy.find({})
            .then(toys => res.render('manage/stored-toys', {
                toys: multipleMongooseToObject(toys)
            }))
            .catch(next);
    }
}

module.exports = new ManageController;