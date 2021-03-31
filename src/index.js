const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./config/db');

// connect to db
db.connect();

const route = require('./routes');

// http logger
app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resours', 'views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
// package.json
//để đây nhớ
//"lint-staged": {
//  "src/**/*.{js,json,scss": "prettier --single-quote --trailing-comma all --tab-width 4 --write"
//},
/*
  "husky: {
    "hooks":{
      "pre-commit": "lint-staged"
    }
  }"
  */
