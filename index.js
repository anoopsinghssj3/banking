require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const connectDB = require('./database/db');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(require('./router/index'));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
