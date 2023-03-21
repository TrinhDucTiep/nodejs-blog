const { index } = require('./NewsController');
const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then(courses => res.json(courses))
            .catch(next); //vibrate for err => next(err)

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
