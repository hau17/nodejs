const Course = require('../models/Course');
const chuyen = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    khoahoc: chuyen.object_sang_object(course),
                });
            })
            .catch(next);
    }
}
module.exports = new CourseController();
