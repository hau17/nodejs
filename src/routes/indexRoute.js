const newRouter = require('./newsRoute');
const siteRouter = require('./siteRoute');
function route(app) {
    app.use('/news', newRouter);
    app.use('/', siteRouter);
}
module.exports = route;
