const Course = require('../models/Course');
const { mang_sang_object } = require('../../util/mongoose');
class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const data = await Course.find({});
            const courses = mang_sang_object(data);
            res.render('home', {
                courses,
            });
        } catch (error) {
            res.status(400).json({ error: 'loi!!', essage: error.message });
        }
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
