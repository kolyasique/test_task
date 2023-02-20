require('dotenv').config();

// const axios = require('axios')
// const cheerio = require('cheerio')
// const chalk = require('chalk') 
const express = require('express');
const morgan = require('morgan');
const cors = require('./middlewares/cors');

const BaseRouter = require('./routers/api');

const app = express();

const PORT = process.env.PORT || 6622;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use('/api', BaseRouter);

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
