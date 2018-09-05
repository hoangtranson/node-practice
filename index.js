const express = require('express');
const chalk = require('chalk');
const app = express();
const debug = require('debug')('app');
const morgan = require('morgan');

app.use(morgan('tiny'))
app.get('/', (req, res) => {
    res.sendfile(__dirname + '/views/index.html')
})


app.listen(3000, () => {
    debug(`listen on port ${chalk.green('3000')}`)
})