const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('node 1 project')
})


app.listen(3000, () => {
    console.log('listen on port 3000')
})