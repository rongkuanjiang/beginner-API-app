const express = require('express');
const { readFile } = require('fs');


const app = express();

app.get('/', (request, response) => {
    readFile('./return.html', 'utf8', (e, html) => {
        if (e) {
            response.status(500).send();
        }
        response.send(html);
    });
});

app.listen(process.env.PORT || 3000, () => console.log('app available on localhost 3000'));