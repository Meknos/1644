const newsRouter = require('./news');
const toysRouter = require('./toys');
const siteRouter = require('./site');
const manageRouter = require('./manage');

function route(app){
    app.use('/news', newsRouter);
    app.use('/manage', manageRouter);
    app.use('/toys', toysRouter);
    app.use('/', siteRouter);

}
module.exports = route;