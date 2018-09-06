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
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
        title: 'my custom title',
        list: ['a', 'b']
    }
    res.render('index', data);
});

app.get('/landing', (req, res) => {
    res.render('landing-page');
});

app.get('/login', (req, res) => {
    res.render('login-page');
});

app.get('/profile', (req, res) => {
    res.render('profile-page');
});

app.get('/template', (req, res) => {
    res.render('template');
});
app.listen(3000, () => {
    debug(`listen on port ${chalk.green('3000')}`)
});