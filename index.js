const express = require('express');
const app = express();

const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const path = require('path');

function getView(file){
    return path.join(__dirname, '/views/', `${file}.html`);
}

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
    res.sendfile(getView('index'))
})


app.listen(3000, () => {
    debug(`listen on port ${chalk.green('3000')}`)
})