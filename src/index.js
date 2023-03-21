const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//db
const db = require('./config/db');

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//http logger
app.use(morgan('combined'));

//middle ware
app.use(
    express.urlencoded({
        extended: true,
    }),
); //dạng form
app.use(express.json()); // gửi bằng js

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
