const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const e = require('express');
const app = express();
const port = 3000;
const route = require('./Routes');
const db = require('./config/db');


// Connect to DB
db.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Method override
app.use(methodOverride('_method'));



// Template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resource/Views'));

route(app);

app.listen(port, () =>
  console.log(`app listening on port ${port}!`)
);
