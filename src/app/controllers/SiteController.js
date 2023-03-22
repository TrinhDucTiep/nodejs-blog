const { index } = require('./NewsController');
const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })//vibrate for courses: courses - cause the same name
            })
            .catch(next); //vibrate for err => next(err)

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
