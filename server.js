const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3423;

app.get('/:characterId', (req, res) => {
    request(`https://dicecloud.com/character/${req.params.characterId}/json?key=${process.env.DICECLOUD_KEY}`).pipe(res);
});


app.listen(port);