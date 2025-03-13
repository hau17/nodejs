const newRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
const coursesRoute = require('./coursesRoute');
function route(app) {
    app.use('/courses', coursesRoute);
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}
module.exports = route;
