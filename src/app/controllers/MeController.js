const { index } = require('./NewsController');
const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../until/mongoose');

class MeController {
    // [GET] /me/stored/courses
    getStoredCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }

    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController();
