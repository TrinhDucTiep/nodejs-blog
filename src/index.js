const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
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

//method override
app.use(methodOverride('_method'));

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
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
