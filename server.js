const express = require('express');
const request = require('request');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 3423;

app.use(cors());

app.get('/:characterId', (req, res) => {
    request(`https://dicecloud.com/character/${req.params.characterId}/json?key=${process.env.DICECLOUD_KEY}`).pipe(res);
});

app.listen(port);