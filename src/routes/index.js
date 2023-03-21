const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.post('/search', (req, res) => {
        res.send('');
    });
}

module.exports = route;
